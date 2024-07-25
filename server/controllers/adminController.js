const Voter = require('../models/Official');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const loginVoter = async (req, res) => {
    try {
      // hard code admin login details
      const admin = {
        username: 'admin',
        password: 'admin'
      }
      const adminVoter = await Voter.findOne({ username: admin.username });
      if (!adminVoter) {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        const newAdminVoter = new Voter({
            username: admin.username,
            password: hashedPassword
        });
        await newAdminVoter.save();
        console.log('Admin user created');
      } else {
        console.log('Admin user already exists');
      }
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

const logout = async (req,res) =>{
    res.clearCookie("authToken");
    res.status(200).send("Logout successful");
    return res;
}

module.exports = {
    loginVoter,
    logout
  
  };