const mongoose = require('mongoose');

const officialSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const Official = mongoose.model('Official', officialSchema);

module.exports = Official;
