const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

const userDirectory = require('./data')

app.use(express.static('public'))

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.get('/info/:id', (request, response) => {
  const requestId = parseInt(request.params.id)
  const foundUser = userDirectory.users.find(user => user.id === requestId)
  response.render('info', foundUser)
})

app.get('/', (request, response) => {
  response.render('home', userDirectory)
})

app.listen(3000, () => {
  console.log('Hooray, our app is listening on port 3000')
})
