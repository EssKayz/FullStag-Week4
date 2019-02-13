const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
        likes: 1,
        author: "DEROPER",
        title: "mgsklasdf",
        url: "4523463gsdfgds"
    },
    {
        title: "gfdhfghfg",
        author: "jkdfdghfghdfg",
        url: "673573gfdhgfhdf",
        likes: 2
    },
    {
        title: "wertsfdgdfsg",
        author: "5tsrtdhdsfgh",
        url: "5463sdfgfghdf",
        likes: 2
    }
]

beforeEach(async () => {
    await Blog.remove({})
    for (i = 0; i < initialBlogs.length; i++) {
        let blogObject = new Blog(initialBlogs[i])
        await blogObject.save()
    }
})

describe('blog api works', () => {

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('there are three blogs', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body.length).toBe(3)
    })

    test('id field is correctly named', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body[0].id).toBeDefined()
    })

    test('posting new blog works', async () => {
        const newBlog = new Blog({
            title: "TestAdd",
            author: "AddTest",
            url: "TestingOfAdds",
            likes: 9001
        })

        await api.post('/api/blogs')
            .send(newBlog)
            .expect(201)
    })

    afterAll(() => {
        mongoose.connection.close()
    })
})