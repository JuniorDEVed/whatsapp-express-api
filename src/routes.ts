import express from "express"
import * as chatsController from "./services/rooms/roomsController"
import * as usersController from "./services/users/usersController"
import * as contactsController from "./services/contacts/contactsController"
//import { authGuard } from "./auth/authGuard"
import { uploadProfileImg } from "./middleware"
const router = express.Router()

// Endpoints
// user
router.post("/user/login", usersController.loginUser) // 									🟢
router.post("/user/register", usersController.registerUser) // 						🟢
router.get("/user", usersController.getUser) // searchBy id? phoneNumber? 🟢
router.put("/user", uploadProfileImg, usersController.updateUser) //     	🟠 needs testing

// contacts
router.post("/contact/:userNumber", contactsController.addContact) // 		🟢
router.get("/contacts/:userNumber", contactsController.allContacts) //		🟠
router.get("/contact/:contactNumber", contactsController.getContact) //   🟠
router.put("/contact/:contactNumber", contactsController.updateContact) //⚫
router.delete("/contact/:contactNumber", contactsController.addContact) //⚫

// groups
router.get("/chats", chatsController.allRooms) //                         ⚫
router.get("/chats/:id", chatsController.getRoom) //                      ⚫
router.post("/chats", chatsController.addRoom) //                         ⚫
router.put("/chats/:id", chatsController.updateRoom) //                   ⚫
router.delete("/chats/:id", chatsController.deleteRoom) //                ⚫

export default router
