const app = require('./app.js')
const conf = require('./utils/config')

app.listen(conf.PORT, () => {
  console.log(`Server running on port ${conf.PORT}`)
})