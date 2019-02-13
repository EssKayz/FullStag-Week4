const app = require('./app.js')
const conf = require('./utils/config')

const PORT = conf.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})