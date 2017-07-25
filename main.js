//main.js
const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

const api = require('https://tiy-learn-content.s3.amazonaws.com/36d3402e-data.js')

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')
