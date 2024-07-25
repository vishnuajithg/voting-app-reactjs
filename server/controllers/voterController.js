const Voter = require('../models/Voter');
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
      const { username, password } = req.body;
  
      const voter = await Voter.findOne({ username });
      if (!voter) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const isMatch = await bcrypt.compare(password, voter.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const token = jwt.sign(
        { id: voter._id, username: voter.username },
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
        }
      });
 
    } catch (error) { 
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
  };

const voterHome = async (req, res,) => {
    try {
      console.log('reached',req.headers.cookie.split('=')[1])
      const token = req.headers.cookie.split('=')[1]; // Extract the token from the header\
      console.log('token', token)
      if (!token) return res.status(401).json({ error: "Access denied" });
      console.log('tokeneeeeee', token)
      const decoded = jwt.verify(token, JWT_SECRET);
      const username = decoded.username;

      const voter = await Voter.findOne({ username });
      if (!voter) {
          return res.status(404).json({ message: 'Voter not found' });
      }
      console.log(voter)
      
      res.json(voter);
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

module.exports = {
    registerVoter,
    loginVoter,
    voterHome,
    // completeRegistrationCandidate,
    logout
  
  };