const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        // required: true
    },
    year: {
        type: String,
        // required: true
    },
    age: {
        type: Number,
        // required: true
    },
    symbol: {
        type: String,
        // required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    registrationDate: {
        type: Date,
        default: Date.now 
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
