const express = require('express') // KRÄV express

const app = express() // SKAPA en express-applikation

const http = require('http') // KRÄV http (node)

const server = http.createServer(app) // SKAPA server av typen Express

const { Server } = require('socket.io') // KRÄV Socket.io-biblioteket och klassen Server
//      ^----^ Klass

const io = new Server(server) // INKLUDERA Socket.io
//         ^--------^ Ny instans av Server-klassen

app.use(express.static('public')) // ANVÄND middleware för statiska filer

const PORT = 3000 // DEFINIERA portnummer

server.listen(PORT, () => {
    // LYSSNA på port
    console.log('Chat app - Listening on port*:' + PORT)
})

app.get('/', (req, res) => {
    // HANTERA GET-request

    res.sendFile(__dirname + '/index.html') // SKICKA fil
})

app.get('/chat', (req, res) => {
    // HANTERA GET-request

    res.sendFile(__dirname + '/chat.html') // SKICKA fil
})

const mainRoom = 'main room'
const waitingRoom = 'waiting room'
let peopleInMainRoom = 0

io.on('connection', (socket) => {
    peopleInMainRoom++

    if (peopleInMainRoom <= 2) {
        socket.join(mainRoom)

        socket.emit('server message', 'Välkommen till chattrummet')

        console.log('People in main room: ' + peopleInMainRoom)
    } else {
        // ANNARS, gör följande
        socket.join(waitingRoom)
        socket.emit('server message', 'Välkommen till väntrummet ')
        socket.emit('server message', 'Du är placerad i kö...')
    }

    socket.on('disconnect', () => {
        console.log('A user disconnected')
        peopleInMainRoom--
    })

    socket.on('chat message', (message) => {
        io.to(mainRoom).emit('chat message', message)
    })
})
