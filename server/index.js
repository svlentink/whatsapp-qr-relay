// WebSocket part

var express = require('express')()
var http = require('http').Server(express)
var io = require('socket.io')(http)

express.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

http.listen(80, function () {
  console.log('listening on *:80')
})

// POST part

var app = express

var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer() // for parsing multipart/form-data

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', upload.array(), function (req, res, next) {
  io.emit('qr', req.body)
  res.send('Received')
})

app.listen(8080, function () {
  console.log('listening on port 8080')
})






/*

var http = new XMLHttpRequest()
var url = "http://127.0.0.1:3001"
var params = "qr=5678"
http.open("POST", url, true)
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
http.send(params)


curl --data "qr=1234" localhost:3001

//*/
