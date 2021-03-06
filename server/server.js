import path from 'path'
import express from 'express'
import socketIO from 'socket.io'
import http from 'http'

import { generateMessage } from './utils/message'

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
    console.log('New user connected')

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'))

    socket.on('createEmail', newEmail => {
        console.log('createEmail', newEmail)
    })

    socket.on('createMessage', message => {
        io.emit('newMessage', generateMessage(message.from, message.text))

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: Date.now()
        // })
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port, () => console.log(`Server is up on port ${port}`))