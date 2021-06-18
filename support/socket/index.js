const socketio = require('socket.io')

let user_name = '';

let socketConnect = (server)=>{
    const io = socketio(server, { cors:{ origin: 'http://localhost:3000'},transports:["websocket"]})
    io.on('connection',(socket)=>{
        console.log(socket.handshake.query)
        console.log("connectioned",socket.id)
        socket.on('join',(login)=>{
            console.log("joined")
            login = JSON.parse(login)
            socket.user_name = login.user_name
            socket.join(login.user_name);
        })
        socket.on('uploaded',()=>{
            io.to(socket.user_name).emit('success')
        })

        socket.on('disconnect',(reason)=>{
            console.log("reason",reason)
        })
    })
}

module.exports = socketConnect