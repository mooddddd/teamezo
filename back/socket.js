const SocketIO = require('socket.io')

module.exports = (server, app) => {
    const io = SocketIO(server, { path: '/socket.io'})

    io.on('connection', (socket) => {
        socket.on('data', (data) => {
            socket.broadcast.emit('reply', data)
        })

        socket.on('hello', (data) => {
            console.log(data, 1)
        })
    })
}