import { Request, Response } from "express"

export let allContacts = (req: Request, res: Response) => {
  res.send("Returns all contacts")
}

export let getContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}

export let deleteContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}

export let updateContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}

export let addContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}
