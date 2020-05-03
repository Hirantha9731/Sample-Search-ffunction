const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenteeSchema = new Schema({
    userName: {
        type: String,
        unique:true,
        validate:/^[A-Za-z0-9_$]+$/
    },
    interests: {
        type: [String]
    },
    mentors:{
        type:[String]
    }
});

module.exports = User = mongoose.model('MenteeProfile',MenteeSchema);
