const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const all = await Blog.find({})
    response.json(all)
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    const name = body.title
    console.log(body)
    console.log(name)
    const blog = new Blog(request.body)

    try {
        const saved = await blog.save()
        response.status(201).json(saved)
    } catch (ex) {
        console.log(ex)
    }
})

blogsRouter.get('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id)
        if (blog) {
            response.json(blog.toJSON())
        } else {
            response.status(404).end()
        }
    } catch (exception) {
        next(exception)
    }
})

blogsRouter.delete('/:id', async (request, response) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
})

module.exports = blogsRouter