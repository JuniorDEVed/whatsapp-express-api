import { Request, Response, NextFunction } from "express"
import UserModel from "./schema"
import { User } from "./types"

export let addUser = async (
  req: Request<{}, {}, Pick<User, "phoneNumber">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { phoneNumber } = req.body
    console.log(phoneNumber)

    const user = await UserModel.find({ phoneNumber: phoneNumber })

    if (user) {
      console.error("user already exists")
      return res.send({ error: "User already exists" })
    }

    const newUser = new UserModel({ phoneNumber })
    const result = await newUser.save()

    res.send(result)
  } catch (error) {
    next(error)
  }
}

export let getUser = (req: Request, res: Response) => {
  res.send("Returns one room")
}

export let allUsers = (req: Request, res: Response) => {
  res.send("Returns all rooms")
}

export let updateUser = (req: Request, res: Response) => {
  res.send("Returns one room")
}

export let deleteUser = (req: Request, res: Response) => {
  res.send("Returns one room")
}
