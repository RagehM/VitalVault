const express = require('express');
const Citizen = require('../models/citizen.model');
const router = express.Router();


//Route to get all citizens
router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const citizens = await Citizen.find(query);
    res.status(200).send(citizens);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route to create a citizen
router.post('/', async (req, res) => {
  try {
    const citizen = await Citizen.create(req.body);
    res.status(200).send(citizen);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route to update a citizen
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Citizen.findByIdAndUpdate(id, req.body);
    const citizens = await Citizen.find();
    res.status(200).send(citizens);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route to delete a citizen
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Citizen.findByIdAndDelete(id);
    const citizens = await Citizen.find();
    res.status(200).send(citizens);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;