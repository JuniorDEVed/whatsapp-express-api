import mongoose from "mongoose"

import { Contact, User, UserModel } from "./types"

const { Schema, model } = mongoose
const ContactSchema = new Schema<Contact>({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  nickname: {
    type: String,
  },
})

const UserSchema = new Schema<User, UserModel>({
  userNumber: { type: String, required: true, unique: true },
  password: { type: String, required: false, minlength: 8 },
  name: String,
  profileImg: String,
  about: String,
  contacts: [ContactSchema],
})

export default model("users", UserSchema)
