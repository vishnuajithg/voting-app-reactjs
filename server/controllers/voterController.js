const Voter = require('../models/Voter');
const Candidate = require('../models/Candidate');
const ElectionSchema = require('../models/ElectionSchema');
const VoteCast = require('../models/VoteCast');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';


const registerVoter = async (req, res) => {
    try {
        console.log(req.body)
        const { fullName, studentId, dob, email, phone, stream, year, password } = req.body;
        if (!fullName || !studentId || !dob || !email || !phone || !stream || !year || !password) {
            console.log('here')
            return res.status(400).json({ message: 'All fields are required' });
        }
        const existingVoter = await Voter.findOne({ studentId });
        if (existingVoter) {
            console.log('here2')
            return res.status(400).json({ message: 'Voter already exists' });
        }
        console.log('before hashing')
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newVoter = new Voter({
            fullName,
            studentId,
            dob,
            email,
            phone,
            stream,
            year,
            password: hashedPassword
        });
        await newVoter.save();
        res.status(201).json({ message: 'Voter registered successfully' });
    } catch (error) {
        console.error('Error registering voter:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const loginVoter = async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log("rrrrr",email, password)
      const voter = await Voter.findOne({ email });
      if (!voter) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      console.log('voterrrrr',voter)
      const isMatch = await bcrypt.compare(password, voter.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const token = jwt.sign(
        { id: voter._id, username: voter.email },
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
          username: voter.email,
        }
      });
 
    } catch (error) { 
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
  };

const voterHome = async (req, res,) => {
    try {
      // console.log('reached',req.headers.cookie.split('=')[1])
      const token = req.headers.cookie.split('=')[1]; // Extract the token from the header\
      // console.log('token', token)
      if (!token) return res.status(401).json({ error: "Access denied" });
      // console.log('tokeneeeeee', token)
      const decoded = jwt.verify(token, JWT_SECRET);
      // console.log(decoded.id,"decoded")
      const email = decoded.username;
      console.log("username",email)
      const voter = await Voter.findOne({ email });
      console.log(voter)
      if (!voter) {
          return res.status(404).json({ message: 'Voter not found' });
      }

      res.json(voter);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
  }

const getApprovedCandidates = async (req, res) => {
    try {
      const token = req.headers.cookie.split('=')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      // console.log(decoded.id,"decoded")
      const email = decoded.username;
        const candidates = await Candidate.find({ isApproved: true });
        console.log("candidatesssssssssssssssssssssssssssssssssssssss",candidates)
        res.json({candidates});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getElectionDetails = async (req, res) => {
    try {

        const electionDetails = await ElectionSchema.find({});
        console.log(electionDetails)
        res.json({electionDetails});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const castVote = async (req, res) => {
    try {
        const { electionTitle, candidateName } = req.body;
        const newVoteCast = new VoteCast({
            electionTitle,
            candidateName,
        });
        await newVoteCast.save();

      const token = req.headers.cookie.split('=')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      const email = decoded.username;
      await Voter.updateOne({email}, { $set: { hasVoted: true } });
        res.status(201).json({ message: 'Vote casted successfully' });
    } catch (error) {
        console.error('Error casting vote:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const hasVoted = async (req, res) => {
    try {
      const token = req.headers.cookie.split('=')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      const email = decoded.username;
      const voter = await Voter.findOne({ email });
      if (!voter) {
        return res.status(404).json({ message: 'Voter not found' });
      }
      if (voter.hasVoted === true) {
        return res.status(200).json({ hasVoted: true });
      }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
}
}
const logout = async (req,res) =>{

    res.clearCookie("authToken");
    res.status(200).send("Logout successful");
    return res;
}
const isApproved = async (req, res) => {
    try {
      const token = req.headers.cookie.split('=')[1]; 
      if (!token) return res.status(401).json({ error: "Access denied" });
      
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log(decoded)
      const email = decoded.username;
      
        const voter = await Voter.findOne({ email });
        // console.log('vvvvvvvvvoter',voter)
        if (!voter) {
            return res.status(404).json({ message: 'Voter not found' });
        }
        if (voter.isApproved === true) {
          return res.status(200).json({ isApproved: true });
        }
        else{
            return res.status(200).json({ isApproved: false });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
// isElectionStarted
const isElectionStarted = async(req, res) => {
  try {
    // const { id } = req.params;
    const election = await ElectionSchema.findOne({ username: 'admin' })
    console.log({election})
    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }
    res.status(200).json(election);
  } catch (error) {
    console.error('Error stopping election:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
module.exports = {
    registerVoter,
    loginVoter,
    voterHome,
    isApproved,
    getApprovedCandidates,
    getElectionDetails,
    castVote,
    hasVoted,
    isElectionStarted,
    logout
  
  };