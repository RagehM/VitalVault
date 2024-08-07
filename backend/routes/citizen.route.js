const express = require('express');
const Citizen = require('../models/citizen.model');
const router = express.Router();


//Route to get all citizens
router.get('/', async (req, res) => {
  try {
    const citizens = await Citizen.find(req.body);
    res.status(200).send(citizens);
  }
  catch (error) {
    console.log(error);
    res.status(500).send('error getting citizens');
  }
});

//Route to create a citizen
router.post('/', async (req, res) => {
  try {
    await Citizen.create(req.body);
    res.status(201).send('citized added successfully');
  }
  catch (error) {
    res.status(500).send('error getting hospital');
  }
});

//Route to update a citizen
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Citizen.findByIdAndUpdate(id, req.body);
    res.status(200).send('citizen updated successfully');
  }
  catch (error) {
    res.status(500).send('error updating citizen');
  }
});

//Route to delete a citizen
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Citizen.findByIdAndDelete(id);
    res.status(200).send('citizen deleted successfully');
  }
  catch (error) {
    res.status(500).send('error deleting citizen');
  }
});

module.exports = router;