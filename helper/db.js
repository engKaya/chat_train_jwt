const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb+srv://admin:Comrad1999@chat-train.7epnn.mongodb.net/chat_train?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true})
    mongoose.connection.on('open' , () =>{
        console.log('connection-db')
    })
    mongoose.connection.on('error' , (err) => {
        console.log('err: '+err)
    })
}