import express from 'express'
import cors from 'cors'
import routes from './routes/index.mjs'

const app = express()

const PORT = process.env.PORT || 12345

app.use(cors())

app.use('/rules', routes.rules)

app.listen(PORT, _ => console.log(`# # #   Game Server running on port: ${PORT}   # # #`))