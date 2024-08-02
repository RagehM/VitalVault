const express = require('express');
const Hospital = require('../models/hospital.model');
const router = express.Router();

//Route to create a hospital
router.post('/', async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(200).send(hospital);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route to delete a hospital
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Hospital.findByIdAndDelete(id);
    const hospitals = await Hospital.find();
    res.status(200).send(hospitals);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route to get all hospitals
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find(req.body);
    res.status(200).send(hospitals);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router