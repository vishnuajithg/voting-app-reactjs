const express = require('express');
const {
    loginOfficial,
    getAllVoters,
    getAllCandidates,
    logout
  } = require('../controllers/officialController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/loginChecker', loginOfficial);
router.get('/getAllVoters',authenticateToken, getAllVoters);
router.get('/getAllCandidates',authenticateToken, getAllCandidates);
router.post("/logout", logout)


module.exports = router;
