const express = require('express');
const mongoose = require('mongoose');
const hospitalRoute = require('./routes/hospital.route');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello, Rageh");
})

mongoose.connect('mongodb+srv://rageh205:rageh123@vitalvault.40kwiom.mongodb.net/?retryWrites=true&w=majority&appName=VitalVault')
    .then(() => {
        console.log("Connected to DB");
        app.use(express.json());
        app.use('/hospitals', hospitalRoute);
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })
