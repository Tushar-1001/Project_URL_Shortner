const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://monty-python:SnYUEY4giV9rekw@functionup-backend-coho.0zpfv.mongodb.net/Tushar_Saini?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('Project URL Shortner - Database connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(3000, function() {
    console.log('Express app running on port ' + 3000)
});