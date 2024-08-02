const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://rageh205:rageh123@vitalvault.40kwiom.mongodb.net/?retryWrites=true&w=majority&appName=VitalVault')
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })
