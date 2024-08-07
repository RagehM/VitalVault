const express = require('express');
const Hospital = require('../models/hospital.model');
const router = express.Router();

//Route to get all hospitals
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find(req.body);
    res.status(200).send(hospitals);
  }
  catch (error) {
    res.status(500).send('error getting hospitals');
  }
});

//Route to create a hospital
router.post('/', async (req, res) => {
  try {
    await Hospital.create(req.body);
    res.status(201).send('hospital added successfully');
  }
  catch (error) {
    res.status(500).send('error adding hospital');
  }
});

//Route to delete a hospital
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Hospital.findByIdAndDelete(id);
    res.status(200).send('hospital deleted successfully');
  }
  catch (error) {
    res.status(500).send('error deleting hospital');
  }
});

module.exports = router;