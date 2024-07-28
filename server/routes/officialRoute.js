const express = require('express');
const {
    loginOfficial,
    stat,
    getAllVoters,
    getAllCandidates,
    createElection,
    createdAt,
    viewResult,
    approveVoter,
    rejectVoter,
    approveCandidate,
    rejectCandidate,
    deleteElection,
    updateElection,
    startElection,
    stopElection,
    logout
  } = require('../controllers/officialController.js');

  
const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/loginChecker', loginOfficial);
router.get('/stat',authenticateToken, stat);
router.get('/getAllVoters',authenticateToken, getAllVoters);
router.get('/getAllCandidates',authenticateToken, getAllCandidates);
router.post('/createElection',authenticateToken, createElection);
router.get('/createdAt',authenticateToken,createdAt)
router.get('/viewResult',authenticateToken,viewResult)
router.post('/approveVoter/:voterId',authenticateToken,approveVoter)
router.post('/rejectVoter/:voterId',authenticateToken,rejectVoter)
router.post('/approveCandidate/:candidateId',authenticateToken,approveCandidate)
router.post('/rejectCandidate/:candidateId',authenticateToken,rejectCandidate)
router.delete('/deleteElection/:id',authenticateToken,deleteElection)
router.put('/updateElection/:id',authenticateToken,updateElection)
router.put('/startElection/:id',authenticateToken,startElection)
router.put('/stopElection/:id',authenticateToken,stopElection)
router.post("/logout", logout) 


module.exports = router;
