import { InferSchemaType, model, Schema } from "mongoose";

const threadSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  topic: { type: String, required: true },
  threadComment: { type: Array },
},
{
    timestamps: true
});
