const express = require('express')
const Formulae = require('../rules/Formulae.js')

const router = express.Router()

router.post(`/formulae/:formula`, (req, res) => {
	const request = req.body
	const formulaName = req.params.formula.toLowerCase()
	req.send(JSON.stringify())
})

module.exports = router