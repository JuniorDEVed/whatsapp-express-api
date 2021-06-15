import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import listEndpoints from "express-list-endpoints"
import cookieParser from "cookie-parser"

import homeRoute from "./services/home/homeRoute"
import routes from "./services/routes"

import { badRequestHandler } from "./middleware"
import { connectMongoDB } from "./database"

// Instantiate
dotenv.config()
const server = express()
const port = process.env.PORT || 3001

// Middleware
server.use(cors())
server.use(express.json())
server.use(cookieParser())

// Routes
server.use("/", homeRoute)
server.use("/api", routes)

// Errors
server.use(badRequestHandler)

// start server
server.listen(port, () => {
  connectMongoDB()
  console.table(listEndpoints(server))
  console.log("Server up and running on port: ", port)
})
