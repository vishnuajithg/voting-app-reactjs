const express = require('express');
const {
    registerVoter,
    loginVoter,
    voterHome, 
    // completeRegistrationCandidate,
    logout
  } = require('../controllers/voterController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/voterRegistrationForm', registerVoter);
router.post('/loginChecker', loginVoter);
router.get('/voterHome',authenticateToken,voterHome);
// router.post('/completeRegistrationCandidate',authenticateToken, completeRegistrationCandidate);
router.post("/logout", logout)
module.exports = router;
