const express = require('express')
const Rules = require('../rules/Rules.js')
const router = express.Router()

let requests = 0

router.get(`/rules`, (req, res) => {
	console.log(`Request #${requests}: /rules`)
	requests++
	res.send(JSON.stringify(Rules))
})

router.get(`/rules/:chapter`, (req, res) => {
	const chapter = req.params.chapter.toLowerCase()
	console.log(`Request #${requests}: /rules/${chapter}`)
	requests++
	if (Rules[chapter]) {
		res.send(JSON.stringify(Rules[chapter]))
	} else {
		res.send('Error: No such rule.')
	}
})

router.get(`/rules/:chapter/:section`, (req, res) => {
	const chapter = req.params.chapter.toLowerCase()
	const section = req.params.section.toLowerCase()
	console.log(`Request #${requests}: /rules/${chapter}/${section}`)
	requests++
	if (Rules[chapter][section]) {
		res.send(JSON.stringify(Rules[chapter][section]))
	} else {
		res.send('Error: No such rule.')
	}
})

router.get(`/rules/:chapter/:section/:item`, (req, res) => {
	const chapter = req.params.chapter.toLowerCase()
	const section = req.params.section.toLowerCase()
	const item = req.params.item.toLowerCase()
	console.log(`Request #${requests}: /rules/${chapter}/${section}/${item}`)
	requests++
	if (Rules[chapter][section][item]) {
		res.send(JSON.stringify(Rules[chapter][section][item]))
	} else {
		res.send('Error: No such rule.')
	}
})

router.get(`/rules/:chapter/:section/:item/:key`, (req, res) => {
	const chapter = req.params.chapter.toLowerCase()
	const section = req.params.section.toLowerCase()
	const item = req.params.item.toLowerCase()
	const key = req.params.key.toLowerCase()
	console.log(`Request #${requests}: /rules/${chapter}/${section}/${item}/${key}`)
	requests++
	if (Rules[chapter][section][item][key]) {
		res.send(JSON.stringify(Rules[chapter][section][item][key]))
	} else {
		res.send('Error: No such rule.')
	}
})

module.exports = router