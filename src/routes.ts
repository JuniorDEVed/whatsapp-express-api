import express from "express"
import * as chatsController from "./services/rooms/roomsController"
import * as usersController from "./services/users/usersController"
//import { authGuard } from "./auth/authGuard"
const router = express.Router()

// Endpoints

// user
router.post("/users", usersController.addUser)
router.get("/users/:id", usersController.getUser)

// group
router.get("/chats", chatsController.allRooms)
router.get("/chats/:id", chatsController.getRoom)
router.post("/chats", chatsController.addRoom)
router.put("/chats/:id", chatsController.updateRoom)
router.delete("/chats/:id", chatsController.deleteRoom)

export default router
