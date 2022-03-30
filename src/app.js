const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/t', (req, res) => {
  res.send('Hello World!2')
})

module.exports = app;