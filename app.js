var express = require('express')
var http = require('http')

var app = express()
app.use(express.static('html'))
app.use(express.static('css'))
app.use(express.static('js'))

http.createServer(app).listen(52222, '172.31.10.167')

app.get('/', (req, res) => {
    res.render('index.html')
});

