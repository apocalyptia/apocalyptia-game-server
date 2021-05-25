const express = require('express')
const app = express()
// const server = require('http').Server(app)
// const io = require('socket.io')(server)
// const { v4: uuidV4 } = require('uuid')
const rulesAPI = require('./routes/rulesAPI.js')
const PORT = 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use(rulesAPI)

const server = app.listen(PORT, () => {
	console.log(
		`# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n` +
		`    Apocalyptia Online Game Server running on port: ${PORT}\n` +
		`# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n`
	)
})

process.on('SIGTERM', () => {
	server.close(() => {
		console.log('Process terminated.')
	})
})