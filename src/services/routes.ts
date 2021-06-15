import express from "express"
import * as chatsController from "./rooms/roomController"
import * as contactController from "./contact/contactController"
import userController from "./user/userController"
// import { authGuard } from "./auth/authGuard"
const router = express.Router()

// Endpoints

// group
router.get("/chats", chatsController.allRooms)
router.get("/chats/:id", chatsController.getRoom)
router.post("/chats", chatsController.addRoom)
router.put("/chats/:id", chatsController.updateRoom)
router.delete("/chats/:id", chatsController.deleteRoom)

// contacts
router.get("/contacts", contactController.allContacts)
router.get("/contacts/:id", contactController.getContact)
router.post("/contacts", contactController.addContact)
router.put("/contacts/:id", contactController.updateContact)
router.delete("/contacts/:id", contactController.deleteContact)

export default router
