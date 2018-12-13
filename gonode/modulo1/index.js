const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const names = ['Efraim Andrade', 'Raquel Viana', 'Nilson Sevilha']

app.get('/', (req, res) => {
  return res.render('list', { names })
})

app.get('/novo', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  names.push(req.body.user)

  return res.redirect('/')
})

app.listen(5000)
