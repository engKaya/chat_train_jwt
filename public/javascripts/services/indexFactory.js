app.factory('indexFactory', [()=>{
    const connectSocket = (url,options) =>
        new Promise((resolve, reject) =>{
            const socket = io.connect(url,options);
            socket.on('connect',()=>{
                console.log('Connected index factory')
                resolve(socket)
            })
            socket.on('connect_error',(err)=>{
                reject(new Error('Error connecting: '+err))

            })

        })
    return {connectSocket}
}])