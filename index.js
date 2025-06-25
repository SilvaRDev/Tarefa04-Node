const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

const port = 3000

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/produtos', (req, res) => {
  res.render('products')
})

app.get('/entrar', (req, res) => {
  res.render('login')
})

app.get('/registrar', (req, res) => {
  res.render('register')
})

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}!`)
})
