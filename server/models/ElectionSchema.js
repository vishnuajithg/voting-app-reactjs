const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) { 
                return value < this.endDate;
            },
            message: 'Start date must be before end date'
        }
    },
    endDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean
    },
    // candidates: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Candidate',
    //     required: true
    // }]
}, {
    timestamps: true // Automatically handles createdAt and updatedAt
});

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;
