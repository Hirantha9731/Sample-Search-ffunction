const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const search = require('./routes/Erudite/search');
const create = require('./routes/Erudite/create');
const app =express();

//BodyParser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Erudite/search',search);
app.use('/Erudite/add',create);


// Connecting to mongoDB
mongoose
    .connect('mongodb://localhost:27017/ERUDITE_DB',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
    .then(()=>console.log('MongoDB Connected...'))
    .catch((err)=> console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('Server started on port : '+port+'...') );
