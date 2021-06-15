import { Request, Response } from "express"
import q2m from "query-to-mongo"
import createError from 'http-errors'
import ContactModel from "./schema"

export let allContacts = async (req: Request, res: Response) => {
  const query = q2m(req.query)
  const total = await ContactModel
  const contacts = await ContactModel.find()
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
