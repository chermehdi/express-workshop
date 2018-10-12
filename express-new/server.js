const express = require('express')
const dotEnv = require('./dotenv')
const fs = require('fs')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// middleware registration

app.use(express.static(path.join(__dirname, 'public')))

// route registration

app.get('/', (req, res) => {
  res.write('Hello Mql')
  res.end()
})

app.get('/file', (req, res) => {
  let filePath = path.join(__dirname, 'index.html')
  let fileContent = fs.readFileSync(filePath)
  res.write(fileContent)
  res.end()
})

app.get('/json', (req, res) => {
  let jsonObject = {
    name: 'mql', 
    promotion: '2017/2019'
  }
  res.json(jsonObject)
  res.end()
})

app.get('/ejs', (req, res) => {
  let name = req.query.name
  res.render('index', { name })
})

app.post('/ejs', (req, res) => {
  let body = req.body
  res.render('body', { body: JSON.stringify(body) })
})

// start listen
app.listen(port , () => console.log('app is listening on port ' + port))