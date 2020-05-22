const express = require('express')
const app = express()
const socket = require('socket.io')
const PORT = 4000
const server = app.listen(PORT, console.log(`Server running at ${PORT}`))
app.use(express.static('public'))
const io = socket(server)
io.on('connection', (socket) => {
    console.log(`Socket Connection Succedded ${socket.id}`)

    socket.on("chat", (data)=> {
        io.sockets.emit("chat",data)
    })

    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data)
    })
})