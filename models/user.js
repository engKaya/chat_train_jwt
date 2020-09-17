const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        minlength:2,
    },
    password:{
        type:String ,
        minlength:5,
        required:true,
        password:true,
    },
})

module.exports = mongoose.model('User', UserSchema)