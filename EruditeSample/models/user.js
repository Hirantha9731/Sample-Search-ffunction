const mongoose = require('mongoose');
const validate =require('mongoose-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        require:[true,'userName is required'],
        validate:/^[A-Za-z0-9_$]+$/
    },
    password: {
        type: String,
        require:[true,'password is required!!']
    }
});

module.exports = User = mongoose.model('Users',UserSchema);
