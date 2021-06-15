import mongoose from 'mongoose'

import { Contact, ContactModel } from './types'

const { Schema, model } = mongoose

const ContactSchema = new Schema<Contact, ContactModel>(
  {
    phoneNumber: { type: String, required:true, unique: true},
    name: String,
    profileImg: String,
    about: String
  }
)

export default model<Contact, ContactModel>('contact', ContactSchema)