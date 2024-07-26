const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true,
        unique: true 
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    phone: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    hasVoted: {
        type: Boolean,
        default: false 
    },
    
    registrationDate: {
        type: Date,
        default: Date.now 
    }
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
