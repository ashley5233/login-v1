const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const users = require('./users')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/', (req, res) => {
  // get the user enter value
  const email = req.body.email
  const password = req.body.password
  const info = 'wrong password!'
  let loginCheck = users(email, password)
  // login success
  if (loginCheck === 'success') {
    return res.render('welcome')
  }
  //login fail
  if (loginCheck === 'wrong') {
    return res.render('index', { info })
  }
})

app.get('/welcome', (req, res) => {
  return res.render('welcome')
})

app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Express is running on http://localhost/${port}`)
})