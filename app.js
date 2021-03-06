const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./Controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const conf = require('./utils/config')
const mongoose = require('mongoose')

const url = conf.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => { console.log('connected to MongoDB') }).catch((error) => { console.log('error connection to MongoDB:', error.message) })


app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)


module.exports = app