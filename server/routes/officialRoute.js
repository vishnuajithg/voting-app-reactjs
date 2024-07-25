const express = require('express');
const {
    loginVoter,
    logout
  } = require('../controllers/adminController.js');

  
// const  authenticateToken  = require('../Middleware/auth.js');


const router = express.Router();

router.post('/loginChecker', loginVoter);
router.post("/logout", logout)
module.exports = router;
