import path from 'path'
import express from 'express'
import socketIO from 'socket.io'
import http from 'http'

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
    console.log('New user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port, () => console.log(`Server is up on port ${port}`))