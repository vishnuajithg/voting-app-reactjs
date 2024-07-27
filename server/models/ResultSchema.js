const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    electionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Election',
        required: true
    },
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    votesReceived: { 
        type: Number,
        required: true
    }
});

const ResultSchema = mongoose.model('Result', resultSchema);

module.exports = ResultSchema;