const express = require('express');
const {
    registerVoter,
    loginVoter,
    voterHome, 
    getApprovedCandidates,
    isApproved,
    logout
  } = require('../controllers/voterController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/voterRegistrationForm', registerVoter);
router.post('/loginVoter', loginVoter);
router.get('/voterHome',authenticateToken,voterHome);
router.get('/getApprovedCandidates',authenticateToken, getApprovedCandidates)
router.get('/isApproved',authenticateToken, isApproved);
router.post("/logout", logout)
module.exports = router;
