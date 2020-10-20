const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const cors = require('cors')
app.use(express.json())
app.use(cors())
const socketio = require("socket.io")
const io = socketio(server)

const chat = []
app.get('/api/chat', (req,res)=>{
    res.json({chat})
})
app.post('/api/comment', (req,res)=>{
    chat.push(req.body)
    res.json({chat})
})

io.on("connection", socket =>{
    socket.on("connected", (un)=>{
        username = un
        socket.broadcast.emit('messages', {username: username, message:`${username} just arrived. Say hi!`})
    })
    socket.on("message", (username, message) => {
        io.emit("messages", {username, message})
    })
    socket.on("disconnect", ()=>{
        io.emit('messages', { server: "admin", message:`${username} left the chat`})
    })
})

server.listen(4000,()=>(console.log("database connected")))