const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
  hospitalName: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const citizenSchema = mongoose.Schema(
  {
    nationalId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    medicalHistory: {
      type: [historySchema],
      required: true
    }
  }
);

const citizen = mongoose.model("Citizen", citizenSchema);
module.exports = citizen;