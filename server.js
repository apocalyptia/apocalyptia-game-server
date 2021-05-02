const express = require('express')
const cors = require('cors')
const formulaeAPI = require('./routes/formulaeAPI.js')
const rulesAPI = require('./routes/rulesAPI.js')

const app = express()

const PORT = process.env.PORT || 1234

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(formulaeAPI)
app.use(rulesAPI)

app.listen(PORT, _ => {
	console.log(
		`# # # # # # # # # # # # # # # # # # # # # # #\n` +
		`    Game Server running on port: ${PORT}\n` +
		`# # # # # # # # # # # # # # # # # # # # # # #\n`
	)
})