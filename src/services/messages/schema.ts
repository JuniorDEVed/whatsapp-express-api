import mongoose from "mongoose"
import { UserSchema } from "../users/schema"
import { MessageModel } from "./types"
import { Message } from "../../typings"

const { Schema, model } = mongoose

export const MessageSchema = new Schema<Message, MessageModel>(
  {
    text: { type: String, required: true },
    sender: { UserSchema },
  },
  { timestamps: true }
)
