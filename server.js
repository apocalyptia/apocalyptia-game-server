const express = require('express')
const cors = require('cors')
const rulesAPI = require('./routes/rulesAPI.js')

const app = express()

const PORT = process.env.PORT || 666

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(rulesAPI)

app.listen(PORT, () => {
	console.log(
		`# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n` +
		`    Apocalyptia Online Game Server running on port: ${PORT}\n` +
		`# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n`
	)
})