import express from "express"
import * as chatsController from "./services/rooms/roomController"
// import { authGuard } from "./auth/authGuard"
const router = express.Router()

// Endpoints

// group
router.get("/chats", chatsController.allRooms)
router.get("/chats/:id", chatsController.getRoom)
router.post("/chats", chatsController.addRoom)
router.put("/chats/:id", chatsController.updateRoom)
router.delete("/chats/:id", chatsController.deleteRoom)

export default router
