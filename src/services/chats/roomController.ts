import { Request, Response } from "express"

export let allRooms = (req: Request, res: Response) => {
  res.send("Returns all rooms")
}

export let getRoom = (req: Request, res: Response) => {
  res.send("Returns one room")
}

export let deleteRoom = (req: Request, res: Response) => {
  res.send("Returns one room")
}

export let updateRoom = (req: Request, res: Response) => {
  res.send("Returns one room")
}

export let addRoom = (req: Request, res: Response) => {
  res.send("Returns one room")
}
