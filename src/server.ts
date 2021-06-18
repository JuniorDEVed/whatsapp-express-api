import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server, { allowEIO3: true })

import { Message, OpenChatRequest, User } from "./typings"

const activeSockets = {
  // "07367329294": socketId
}

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("sendMessage", (groupId, message) => {
    socket.to(groupId).emit(message)
  })

  // when connected add userNumber: socketId to active socket list
  socket.on("didConnect", (userNumber) => {
    activeSockets[userNumber] = socket
  })

  // join group
  socket.on("joinGroup", (userNumber, groupId) => {
    activeSockets[userNumber].join(groupId)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

export { server, app }

// socket.join("main-room")
// console.log(socket.rooms)

// socket.on("setUsername", ({ username }: User) => {
//   console.log("here")
//   onlineUsers = onlineUsers
//     .filter((user) => user.username !== username)
//     .concat({
//       username,
//       id: socket.id,
//     })
//   console.log(onlineUsers)

//   socket.emit("loggedin")

//   socket.broadcast.emit("newConnection")
// })

// socket.on("sendmessage", (message: Message) => {
//   // io.sockets.in("main-room").emit("message", message)
//   socket.to("main-room").emit("message", message)

//   // saveMessageToDb(message)
// })

// socket.on("openChatWith", ({ recipientId, sender }: OpenChatRequest) => {
//   console.log("here")
//   socket.join(recipientId)
//   socket.to(recipientId).emit("message", { sender, text: "Hello, I'd like to chat with you" })
// })

// socket.on("disconnect", () => {
//   console.log("Disconnected socket with id " + socket.id)

//   onlineUsers = onlineUsers.filter((user) => user.id !== socket.id)

//   socket.broadcast.emit("newConnection")
// })
