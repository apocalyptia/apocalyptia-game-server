const express = require('express')
const Rules = require('../rules/Rules.js')

const router = express.Router()

router.get(`/rules`, (req, res) => res.send(JSON.stringify(Rules)))

// rulesAPI.get(`/rules/:chapter`, (req, res) => {
// 	console.log('hit /rules/:chapter')
// 	res.send(JSON.stringify(Rules.list[req.params.chapter.toLowerCase()]))
// })

// rulesAPI.get(`/rules/:chapter/:section`, (req, res) => {
// 	console.log('hit /rules/:chapter/:section')
// 	res.send(JSON.stringify(Rules.list[req.params.chapter.toLowerCase()][req.params.section.toLowerCase()]))
// })

module.exports = router