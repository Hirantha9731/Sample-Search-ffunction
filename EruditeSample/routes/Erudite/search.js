const express = require('express');
const search = express.Router();
const mongoose = require('mongoose');
const cors = require("cors");
const user = require('../../models/user')
const userDetails = require('../../models/userDetails')


search.use(cors());

search.get('/:userName',(req,res) =>{
   userDetails.findOne({userName: req.params.userName})
       .then((userEntries)=>{res.json(userEntries);})
       .catch(err =>{
           res.send(err)
       });
});



module.exports = search;
