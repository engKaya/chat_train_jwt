const socketio = require('socket.io')
const io = socketio()

const index_socketApi = { }
index_socketApi.io = io

io.on('connection',(socket)=>{
    console.log('index socket connect')

    socket.on('newUser',()=>{
        console.log('newUser')
    })
})

module.exports = index_socketApi