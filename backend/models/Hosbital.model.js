const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
);

const hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = hospital;