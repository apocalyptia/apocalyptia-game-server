import express from 'express'
import cors from 'cors'
import Rules from './rules/Rules.mjs'

const app = express()

const PORT = process.env.PORT || 12345

app.use(cors())

app.get(`/rules`, (req, res) => {
	res.status(200).send(JSON.stringify(Rules))
})

for (let rule of Object.keys(Rules.list)) {
	app.get(`/rules/${rule.toLowerCase()}`, (req, res) => {
		res.status(200).send(JSON.stringify(Rules.list[rule.toLowerCase()]))
	})
}

// app.get('/rules/:ruleName', (req, res) => {
// 	const ruleName = req.params.ruleName
// 	const queriedRule = MasterRulesList.list.find(r => r.name == ruleName)
// 	console.log(`queriedRule = ${queriedRule}`)
// 	res.status(200).send(queriedRule)
// })

app.listen(PORT, _ => console.log(`# # #   Game Server running on port: ${PORT}   # # #`))