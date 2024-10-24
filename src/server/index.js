const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const PORT = 5000

const authRoutes = require('./routes/authRoutes')

const whitelist = ['http://localhost:3000']
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    const allowed = whitelist.indexOf(origin) !== -1
    callback(null, allowed)
  }
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.error(err))

app.get('/', (req, res) => {
  res.send('WORKS')
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
})