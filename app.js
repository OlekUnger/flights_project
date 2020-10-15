const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');//чтобы парсить json
const keys = require('./config/keys');

const flightRoutes = require('./routes/fligth-routes');

const app = express();

mongoose.connect(keys.mongoURI,  {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('mongoDB connected'))
    .catch((err)=> console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/flights', flightRoutes);

module.exports = app;
