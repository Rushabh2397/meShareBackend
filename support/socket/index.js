// const socketio = require('socket.io')

// let user_name = '';

// let socketConnect = (server)=>{
//     const io = socketio(server, { cors:{ origin: 'http://localhost:3000'},transports:["websocket"]})
//     io.on('connection',(socket)=>{
        
//         socket.on('join',(user_id)=>{
//             console.log("user_id",user_id)
//             socket.join(user_id);
//         })
//         socket.on('uploaded',(user_id)=>{
//             console.log('user_id',user_id)
//             io.to(user_id).emit('success')
//         })

//         socket.on('disconnect',(reason)=>{
//             console.log("reason",reason)
//         })
//     })

// }

// module.exports = socketConnect