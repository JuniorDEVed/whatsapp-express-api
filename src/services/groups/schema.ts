import mongoose from "mongoose"
import { UserSchema } from "../users/schema"
import { MessageSchema } from "../messages/schema"

import { Group, GroupModel } from "./types"

const { Schema, model } = mongoose

export const GroupSchema = new Schema<Group, GroupModel>(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [UserSchema],
    messages: [MessageSchema],
  },
  { timestamps: true }
)

export default model<Group, GroupModel>("groups", GroupSchema)
