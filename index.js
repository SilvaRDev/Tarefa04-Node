const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

const products = [
  {id: 1, name: 'Porta', description: 'Porta feita com madeira de carvalho', value: 1999},
  {id: 2, name: 'Abajur', description: 'Abajur novo, fabricado na China', value: 89},
  {id: 3, name: 'Teclado', description: 'Teclado logitech novo, ainda na caixa', value: 199},
  {id: 3, name: 'Fone', description: 'Fone logitech novo, ainda na caixa', value: 359},
  {id: 3, name: 'Gabinete', description: 'gabinete logitech novo, ainda na caixa', value: 499},
  {id: 3, name: 'Mesa', description: 'Mesa feita com madeira de pinheiro', value: 1299},
  {id: 3, name: 'Cadeira', description: 'Cadeira gamer usada, porém bem conservada...', value: 799},
  {id: 3, name: 'Monitor', description: 'Monitor novo samsung', value: 2199}
]

app.get('/produtos', (req, res) => {
  res.render('products', { products })
})

app.get('/entrar', (req, res) => {
  res.render('login')
})

app.get('/registrar', (req, res) => {
  res.render('register')
})

app.get('/', (req, res) => {
  res.render('home', { products })
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}!`)
})
