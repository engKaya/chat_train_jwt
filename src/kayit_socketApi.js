const socketio = require('socket.io')
const io = socketio()

const mongoose = require('mongoose')
const User = require('../models/User')

const kayit_socketApi = { }
kayit_socketApi.io = io

io.on('connection',(socket)=>{
    console.log('kayit socket connect')

    socket.on('kayitController',()=>{
        console.log('kayit socket cevabı')
    })

    socket.on('kullaniciKayit',(data)=>{
        const movie = new User({
            username: data.username,
            password: data.password,
        })
        const promise = movie.save()
        promise.then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    })


})

module.exports = kayit_socketApi