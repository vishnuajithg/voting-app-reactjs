const Official = require('../models/Official');
const Voter = require('../models/Voter');
const Candidate = require('../models/Candidate');
const ElectionSchema = require('../models/ElectionSchema');
const VoteCast = require('../models/VoteCast');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const loginOfficial = async (req, res) => {
    try {
      // hard code admin login details
      const admin = {
        username: 'admin',
        password: 'admin'
      }
      const adminVoter = await Official.findOne({ username: admin.username });
      if (!adminVoter) {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        const newAdminVoter = new Official({
            username: admin.username,
            password: hashedPassword
        });
        await newAdminVoter.save(); 
        console.log('Admin user created');
      } else {
        console.log('Admin user already exists');
      }
      const { username, password } = req.body;
  
      const voter = await Official.findOne({ username });
     
      if (!voter) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const isMatch = await bcrypt.compare(password, voter.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      // const ElectionSchema = await ElectionSchema.find({});
      // if (!ElectionSchema) {
      //   return res.status(401).json({ message: 'No election found' });
      // }

     
  
      const token = jwt.sign(
        { id: voter._id, username: voter.username},
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      console.log(token)
      // res.cookie('test', "123")
      res.cookie('authToken', token);
      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: voter._id,
          username: voter.username,
          // electiontitle : ElectionSchema.title
        }
      });
 
    } catch (error) { 
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
  };
const stat = async (req, res) => {
  try {
    const votersApproved = await Voter.countDocuments({ isApproved: true });
    const votersRejected = await Voter.countDocuments({ isApproved: false });
    const candidatesApproved = await Candidate.countDocuments({ isApproved: true });
    const candidatesRejected = await Candidate.countDocuments({ isApproved: false });
    const electionStatus = await ElectionSchema.findOne({}).select('title');// Adjust the query as necessary
    console.log(electionStatus)
    res.json({
      votersApproved,
      votersRejected,
      candidatesApproved,
      candidatesRejected,
      currentElectionStatus: electionStatus ? electionStatus.title : 'No active election',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllVoters = async (req, res) => {
  try {
    const voters = await Voter.find({});
    res.status(200).json(voters);
} catch (error) {
    console.error('Error fetching voters:', error);
    res.status(500).json({ message: 'Server error' });
}
};

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find({});
    res.status(200).json(candidates);
} catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ message: 'Server error' });
}
}
const createElection = async (req, res) => {
  try {
    // console.log(req.body)
    const { title, description, startDate, endDate } = req.body;
    if (!title || !description || !startDate || !endDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the start date is before the end date
    if (startDate > endDate) {
      return res.status(400).json({ message: 'Start date must be before end date' });
    }

    const existingElection = await ElectionSchema.findOne({ title });
    if (existingElection) {
      return res.status(400).json({ message: 'Election with same title already exists' });
    }

    const newElection = new ElectionSchema({ username : 'admin' ,title, description, startDate, endDate, isActive: true }); 
    await newElection.save();
    res.status(201).json({ message: 'Election created successfully' });
  } catch (error) {
    console.error('Error creating election:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createdAt = async (req, res) => {
  try {
    // console.log(req.headers.cookie.split('=')[1])
    const token = req.headers.cookie.split('=')[1]; 
      if (!token) return res.status(401).json({ error: "Access denied" });
      
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

    const electionDetails = await ElectionSchema.findOne({ username });
    console.log(electionDetails,"rr")
    if (!electionDetails) {

      return res.status(404).json({ message: 'Election not found' });
    } 
    console.log()
    if (typeof(electionDetails.createdAt) === 'object') {
      return res.status(201).json({created:true,electionDetails});
    } 

  } catch (error) {
    console.error('Error while checking createdAt or not :', error);
    res.status(500).json({ message: 'Server error' });
  }

}
// app.get('/api/candidate-counts',
const viewResult = async (req, res) => {
  try {
    const candidateCounts = await VoteCast.aggregate([
      {
        $group: {
          _id: '$candidateName',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(candidateCounts);
  } catch (error) {
    console.error('Error fetching candidate counts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const approveVoter = async (req, res) => {
  try {
    const { voterId } = req.params;
    const voter = await Voter.findById(voterId);
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }
    voter.isApproved = true;
    await voter.save();
    res.status(200).json({ message: 'Voter approved successfully' });
  } catch (error) {
    console.error('Error approving voter:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const rejectVoter = async (req, res) => {
  try {
    const { voterId } = req.params;
    const voter = await Voter.findById(voterId);
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }
    voter.isApproved = false;
    await voter.save();
    res.status(200).json({ message: 'Voter rejected successfully' });
  } catch (error) {
    console.error('Error rejecting voter:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const approveCandidate  = async (req, res) => {
  try {
    const { candidateId } = req.params;
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    candidate.isApproved = true;
    await candidate.save();
    res.status(200).json({ message: 'Candidate approved successfully' });
  } catch (error) {
    console.error('Error approving candidate:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const rejectCandidate  = async (req, res) => {
  try {
    const { candidateId } = req.params;
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    candidate.isApproved = false;
    await candidate.save();
    res.status(200).json({ message: 'Candidate rejected successfully' });
  } catch (error) {
    console.error('Error rejecting candidate:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const deleteElection = async (req, res) => {
  try {
    console.log(req.params)
    const electionId  = req.params.id;
    console.log('ele',electionId)
    const election = await ElectionSchema.findByIdAndDelete(electionId);
    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }
    res.status(200).json({ message: 'Election deleted successfully' });
  } catch (error) {
    console.error('Error deleting election:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const updateElection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const election = await ElectionSchema.findById(id);
    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }
    election.title = title;
    election.description = description;
    await election.save();
    res.status(200).json({ message: 'Election updated successfully' });
  } catch (error) {
    console.error('Error updating election:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
const startElection = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedElection = await ElectionSchema.findByIdAndUpdate(id, { isActive: true });
    if (!updatedElection) {
      return res.status(404).json({ message: 'Election not found' });
    }
    res.status(200).json({ message: 'Election stopped successfully' });
  } catch (error) {
    console.error('Error stopping election:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
const stopElection  = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedElection = await ElectionSchema.findByIdAndUpdate(id, { isActive: false });
    if (!updatedElection) {
      return res.status(404).json({ message: 'Election not found' });
    }
    res.status(200).json({ message: 'Election stopped successfully' });
  } catch (error) {
    console.error('Error stopping election:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
const logout = async (req,res) =>{
    res.clearCookie("authToken");
    res.status(200).send("Logout successful");
    return res;
}

module.exports = {
  loginOfficial,
  stat,
    getAllVoters,
    getAllCandidates,
    createElection,
    createdAt,
    viewResult,
    approveVoter,
    rejectVoter,
    approveCandidate,
    rejectCandidate,
    deleteElection,
    updateElection,
    startElection,
    stopElection,
    logout
  
  };

  