const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const title = process.argv[3]
const author = process.argv[4]
const url = process.argv[5]
const likes = process.argv[6]

const url =
    `mongodb+srv://memes:${password}@cluster0-gduam.mongodb.net/blogDB?retryWrites=true`


mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = new mongoose.Schema({
  title: String, author: String, url: String, likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const person = new Blog({
  title: title, author: author, url: url, likes: likes
})

if (user === undefined || numba === undefined) {
  Blog.find({}).then(result => {
    result.forEach(bloggy => { console.log(bloggy)})
    mongoose.connection.close()
  })
} else {
  person.save().then(response => {
    mongoose.connection.close();
  })
}