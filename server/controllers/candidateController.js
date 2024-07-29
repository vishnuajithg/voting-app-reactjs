const Candidate = require('../models/Candidate');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');



require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const registerCandidate = async (req, res) => {
  try {
    const { name, dob, username, password } = req.body;

    // Basic validation
    if (!name || !dob || !username || !password) {
      console.log('All fields are required')
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if username already exists
    const existingCandidate = await Candidate.findOne({ username });
    if (existingCandidate) {
      console.log('already exists')
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new candidate
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCandidate = new Candidate({
      name,
      dob,
      username,
      password: hashedPassword,
    });

    await newCandidate.save();
    res.status(201).json({ message: 'Candidate registered successfully' });
  } catch (error) {
    console.error('Error registering candidate:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginCandidate = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const candidate = await Candidate.findOne({ username });
      if (!candidate) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const isMatch = await bcrypt.compare(password, candidate.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const token = jwt.sign(
        { id: candidate._id, username: candidate.username },
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
          id: candidate._id,
          username: candidate.username,
        }
      });
 
    } catch (error) { 
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
  };

const candidateHome = async (req, res,) => {
    try {
      console.log('reached',req.headers.cookie.split('=')[1])
      const token = req.headers.cookie.split('=')[1]; // Extract the token from the header\
      console.log('token', token)
      if (!token) return res.status(401).json({ error: "Access denied" });
      console.log('tokeneeeeee', token)
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

      const candidate = await Candidate.findOne({ username });
      if (!candidate) {
          return res.status(404).json({ message: 'Candidate not found' });
      }
      console.log(candidate)
      
      res.json(candidate);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
  }

const completeRegistrationCandidate = async (req, res) => {
  try {
    const token = req.headers.cookie.split('=')[1]; // Extract the token from the header\
      // console.log('token', token)
      if (!token) return res.status(401).json({ error: "Access denied" });
      // console.log('tokeneeeeee', token)
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

    const { stream, year, age, phoneNumber, biography } = req.body;

    if (!stream || !year || !age || !phoneNumber || !biography) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingCandidate = await Candidate.findOne({ username });
    if (!existingCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    existingCandidate.stream = stream;
    existingCandidate.year = year;
    existingCandidate.age = age;
    existingCandidate.phoneNumber = phoneNumber;
    existingCandidate.biography = biography;
    existingCandidate.isRegistered = 'true';

    await existingCandidate.save();
    console.log('success')
    res.status(200).json({ message: 'Candidate details updated successfully' });
  } catch (error) {
    console.error('Error updating candidate:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const isRegistered = async (req, res) => {
  try {
    
    const token = req.headers.cookie.split('=')[1]; 
      if (!token) return res.status(401).json({ error: "Access denied" });
      
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

    const candidate = await Candidate.findOne({ username });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    } 
    if (candidate.isRegistered === true) {
      return res.status(200).json({ isRegistered: true ,candidate});
    }

  } catch (error) {
    console.error('Error checking is registration or not :', error);
    res.status(500).json({ message: 'Server error' });
  }
}

const isApproved = async (req, res) => {
  try {
    
    const token = req.headers.cookie.split('=')[1]; 
      if (!token) return res.status(401).json({ error: "Access denied" });
      
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

    const candidate = await Candidate.findOne({ username });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    } 
    if (candidate.isApproved === true) {
      return res.status(200).json({ isApproved: true});
    }

  } catch (error) {
    console.error('Error checking is registration or not :', error);
    res.status(500).json({ message: 'Server error' });
  }

}
const logout = async (req,res) =>{

    res.clearCookie("authToken");
    res.status(200).send("Logout successful");
    return res;
}
module.exports = {
  registerCandidate,
  loginCandidate,
  candidateHome,
  completeRegistrationCandidate,
  isRegistered,
  isApproved,
  logout

};
