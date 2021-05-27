const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('groepsgesprek1') ///${uuidV4()}
})

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => { //luisteren naar of mensen een kamer joinen
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('new-user', userId) //stuur bericht dat gebruiker is gejoind
    }) 
})

server.listen(3000)