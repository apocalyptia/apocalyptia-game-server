import Rules from '../rules/Rules.mjs'
import { Router } from 'express'

const router = Router()

router.get(`/rules`, (req, res) => {
	res.status(200).send(JSON.stringify(Rules))
})

router.get(`/rules/:chapter`, (req, res) => {
	res.status(200).send(JSON.stringify(Rules.list[req.params.chapter.toLowerCase()]))
})

router.get(`/rules/:chapter/:section`, (req, res) => {
	res.status(200).send(JSON.stringify(Rules.list[req.params.chapter.toLowerCase()][req.params.section.toLowerCase()]))
})

export default router