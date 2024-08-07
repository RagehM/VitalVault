const express = require('express');
const mongoose = require('mongoose');
const hospitalRoute = require('./routes/hospital.route');
const citizenRoute = require('./routes/citizen.route');
const dotenv = require('dotenv').config();
const URI = process.env.CONNECTION_STRING;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello, Rageh");
})

mongoose.connect(URI)
    .then(() => {
        console.log("Connected to DB");
        app.use(express.json());
        app.use('/hospitals', hospitalRoute);
        app.use('/citizens', citizenRoute);
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })
