import { Request, Response, NextFunction } from "express"
import { ObjectId } from "mongoose"
import { User } from "../users/types"
import UserModel from "../users/schema"
import GroupModel from "./schema"
import { Group } from "./types"

export let addGroup = async (
  req: Request<Pick<User, "userNumber">, {}, Group>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { members, messages } = req.body
    const user = await UserModel.findOne({ userNumber: req.params.userNumber })

    if (!user) {
      console.error("User not found")
      res.send({ error: "User not found" })
    }

    // assemble new group object
    const newGroup: Group = {
      creator: user._id,
      members: members || [], // user and contact numbers
      messages: messages || [],
    }

    // create group
    const group = new GroupModel(newGroup)
    const result = await group.save()

    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

export let getGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let allGroups = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns all rooms")
}

export let updateGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let deleteGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}
