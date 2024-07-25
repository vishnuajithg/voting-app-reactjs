const express = require('express');
const {
    registerCandidate,
    loginCandidate,
    candidateHome, completeRegistrationCandidate,
    logout
  } = require('../controllers/candidateController');
  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/candidateRegistrationForm', registerCandidate);
router.post('/loginChecker', loginCandidate);
router.get('/candidateHome',authenticateToken,candidateHome);
router.post('/completeRegistrationCandidate',authenticateToken, completeRegistrationCandidate);
router.post("/logout", logout)
module.exports = router;
