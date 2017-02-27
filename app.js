var express = require('express')
var http = require('http')

var app = express()
app.use(express.static('html'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use('/static', express.static('static'))

http.createServer(app).listen(8008, '172.31.10.167')
