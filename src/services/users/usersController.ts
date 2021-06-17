import { Request, Response, NextFunction } from "express"
import q2m from "query-to-mongo"
import UserModel from "./schema"
import { User } from "./types"

export let registerUser = async (
  req: Request<{}, {}, Pick<User, "userNumber">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.body
    console.log(userNumber)

    const user = await UserModel.find({ userNumber: userNumber })

    if (user) {
      console.error("user already exists")
      return res.send({ error: "User already exists" })
    }

    const newUser = new UserModel({ userNumber })
    const result = await newUser.save()

    res.send(result)
  } catch (error) {
    next(error)
  }
}

export let loginUser = async (
  req: Request<{}, {}, Pick<User, "userNumber">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.body
    const user = await UserModel.find({ userNumber: userNumber })

    if (!user) return res.send({ error: "User not found" })

    res.send(user[0])
  } catch (error) {
    next(error)
  }
}

export let getUser = async (
  req: Request<{}, {}, Pick<User, "userNumber" | "_id">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber, _id } = req.query

    //@ts-ignore
    const user = await UserModel.find({ $or: [{ userNumber: userNumber }, { _id: _id }] })

    console.log(user)
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
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
