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

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}!`)
})
