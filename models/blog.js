const conf = require('../utils/config')
const mongoose = require('mongoose')

const url = conf.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => { console.log('connected to MongoDB') }).catch((error) => { console.log('error connection to MongoDB:', error.message) })

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)