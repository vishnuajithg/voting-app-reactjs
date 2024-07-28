const express = require('express');
const {
    loginOfficial,
    getAllVoters,
    getAllCandidates,
    createElection,
    createdAt,
    viewResult,
    logout
  } = require('../controllers/officialController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/loginChecker', loginOfficial);
router.get('/getAllVoters',authenticateToken, getAllVoters);
router.get('/getAllCandidates',authenticateToken, getAllCandidates);
router.post('/createElection',authenticateToken, createElection);
router.get('/createdAt',authenticateToken,createdAt)
router.get('/viewResult',authenticateToken,viewResult)
router.post("/logout", logout) 


module.exports = router;
