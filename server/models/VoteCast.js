const mongoose = require('mongoose');

const voteCastSchema = new mongoose.Schema({
  electionTitle: {
    type: String,
    required: true
  },
  candidateName: {
    type: String,
    required: true
  }
});

const VoteCast = mongoose.model('VoteCast', voteCastSchema);

module.exports = VoteCast;
