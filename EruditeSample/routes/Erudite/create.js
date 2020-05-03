const express = require('express');
const search = express.Router();
const mongoose = require('mongoose');
const userDetails = require('../../models/userDetails')

search.post('/',(req,res)=>{
    const newUser = new userDetails({
        userName:req.body.userName,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        phone:req.body.phone,
        email:req.body.email,
        designation: req.body.designation
    });
    newUser.set('address.street',req.body.address.street);
    newUser.set('address.city',req.body.address.city);
    newUser.set('address.country',req.body.address.country);
    newUser.save(true)
        .then(newUser=>{res.json(newUser)})
        .catch((updateProfileErr) => {
            if (updateProfileErr.errors) {
                if (updateProfileErr.errors.firstName) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.firstName.message });
                    return;
                }
                if (updateProfileErr.errors.lastName) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.lastName.message });
                    return;
                }
                if (updateProfileErr.errors.gender) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.gender.message });
                    return;
                }
                if (updateProfileErr.errors.designation) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.designation.message });
                    return;
                }
                if (updateProfileErr.errors.phone) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.phone.message });
                    return;
                }
                if (updateProfileErr.errors.email) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.email.message });
                    return;
                }

                if (updateProfileErr.errors.address.city) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.address.city.message });
                    return;
                }
                if (updateProfileErr.errors.address.street) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.address.street.message });
                    return;
                } if (updateProfileErr.errors.address.country) {
                    res.status(400).json({ success: false, message: updateProfileErr.errors.address.country.message });
                    return;
                }
            }
            res.status(404).json({ success: false, message: `User not found!! ` });
        });

});

module.exports = search;
