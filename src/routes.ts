import express from "express"
import * as chatsController from "./services/rooms/roomsController"
import * as usersController from "./services/users/usersController"
//import { authGuard } from "./auth/authGuard"
const router = express.Router()

// Endpoints

// user
router.post("/users/login", usersController.loginUser) // 🟢
router.post("/users/register", usersController.registerUser) // 🟢
router.get("/users", usersController.getUser) // searchBy id? phoneNumber? 🟢

// contacts
// router.post('/contacts', contactsController.addContact)
// router.get('/contacts', contactsController.getContacts)
// router.get('/contacts/:id', contactsController.getContact)
// router.put('/contacts/:id', contactsController.editContact)
// router.delete('/contacts/:id', contactsController.addContact)

// groups
router.get("/chats", chatsController.allRooms)
router.get("/chats/:id", chatsController.getRoom)
router.post("/chats", chatsController.addRoom)
router.put("/chats/:id", chatsController.updateRoom)
router.delete("/chats/:id", chatsController.deleteRoom)

export default router
