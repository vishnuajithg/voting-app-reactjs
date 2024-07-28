const express = require('express');
const {
    registerVoter,
    loginVoter,
    voterHome, 
    getApprovedCandidates,
    isApproved,
    getElectionDetails,
    castVote,
    hasVoted,
    isElectionStarted,
    logout
  } = require('../controllers/voterController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/voterRegistrationForm', registerVoter);
router.post('/loginVoter', loginVoter);
router.get('/voterHome',authenticateToken,voterHome);
router.get('/getApprovedCandidates',authenticateToken, getApprovedCandidates)
router.get('/getElectionDetails',authenticateToken, getElectionDetails);
router.get('/isApproved',authenticateToken, isApproved);
router.post('/castVote',authenticateToken,castVote)
router.get('/hasVoted',authenticateToken,hasVoted)
router.get('/isElectionStarted',authenticateToken,isElectionStarted)
router.post("/logout", logout)
module.exports = router;
