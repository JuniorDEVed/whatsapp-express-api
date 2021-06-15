import { Document, Model } from "mongoose";

export interface Contact {
  phoneNumber: string
  name?: string
  profileImg?: string
  about?: string
}

export interface ContactDocument extends Contact, Document {}

export interface ContactModel extends Model<ContactDocument> {}