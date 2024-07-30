const express = require('express');
const {
    registerCandidate,
    loginCandidate,
    candidateHome, completeRegistrationCandidate,
    isRegistered,
    isApproved,
    logout
  } = require('../controllers/candidateController');
  
const  authenticateToken  = require('../Middleware/auth.js');

 
const router = express.Router();

router.post('/candidateRegistrationForm', registerCandidate);
router.post('/loginChecker', loginCandidate);
router.get('/candidateHome',authenticateToken,candidateHome);
router.post('/completeRegistrationCandidate',authenticateToken, completeRegistrationCandidate);
router.get('/isRegistered',authenticateToken, isRegistered);
router.get('/isApproved',authenticateToken, isApproved);

router.post("/logout", logout)
module.exports = router; 
 