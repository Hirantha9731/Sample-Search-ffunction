const mongoose = require('mongoose');
const validate =require('mongoose-validator');


//-------- validators ----------------------------->>
const nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [0, 40],
        message: 'Name must not exceed {ARGS[1]} characters.'
    })
];
const emailValidator = [
    validate({
        validator: 'isLength',
        arguments: [0, 40],
        message: 'Email must not exceed {ARGS[1]} characters.'
    }),
    validate({
        validator: 'isEmail',
        message: 'Email must be valid.'
    })
];


//<<=================== MODEL SCHEMAS  =======================================>>>>


/**
 * This model schema holds contact details, personal details of users.
 */
const userDetailModelSchema = new mongoose.Schema({
    profileImage: {
        type: String,
    },
    userName: {
        type: String,
        required:[true,'userName  is required.'],
        validate: /^[A-Za-z0-9_$]+$/
    },
    firstName: {
        type: String,
        required:[true,'firstName is required.'],
        validate: /^[a-zA-Z\-]+$/
    },
    lastName: {
        type: String,
        required:[true,'lastName is required.'],
        validate: /^[a-zA-Z\-]+$/
    },
    // dob: Date,
    gender: {
        type: String,
        required:[true,'gender is required.'],
        validate: /^[M|F]$/
    },
    phone: {
        type: String,
        required:[true,'phone is required.'],
        validate:/^\d{10}$/
    },
    email: {
        type: String,
        required:[true,'email  is required.'],
        validate: emailValidator
    },
    address: {
        type:Map,
        street: {
            type: String,
            required:[true,'street is required.'],
            validate: /[A-Za-z0-9/-]*/
        },
        city: {
            type: String,
            required:[true,'city  is required.'],
            validate: /[A-Za-z]*/
        },
        country: {
            type: String,
            required:[true,'country is required.'],
            validate: /[A-Za-z]*/
        }
    },
    School: {
        type: [String]

    },
    Degrees: {
        type: [String]

    },
    universities: {
        type: [String]

    },
    designation:{
        type:String,
        required:[true,'designation  is required.'],

    }
});

userDetailModelSchema.index({userName: 1, phone: 1, email: 1}, {unique: true, sparse: true});
//<<<====

module.exports = UserDetails = mongoose.model('UserDetail', userDetailModelSchema);
