const SocketIO = require('socket.io')

module.exports = (server, app) => {
    const io = SocketIO(server, { path: '/socket.io', })

    io.on('connection', (socket) => {

        socket.on('data', (data) => {
            const json = {userid: data.userid, data: data.message }
            socket.broadcast.emit('reply', JSON.stringify(json))
        })
    })
}