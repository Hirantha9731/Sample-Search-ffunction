const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
    userName: {
        type: String,
        unique:true,
        validate:/^[A-Za-z0-9_$]+$/
    },
    specialities: {
        type: [String]
    },
    Mentees: {
        type: [String]
    }
});

module.exports = User = mongoose.model('MentorProfile',MentorSchema);
