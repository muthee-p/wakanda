const express = require('express')
const router = express.Router();
const {Citizens} = require('../models')

router.get("/", async(req, res) =>{
	const citizensList = await Citizens.findAll();
	res.json(citizensList);
});

router.post('/', async(req, res) =>{
	const citizen = req.body
	await Citizens.create(citizen);
	res.json(citizen);
})

module.exports = router;