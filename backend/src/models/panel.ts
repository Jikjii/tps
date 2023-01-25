import { InferSchemaType, model, Schema } from "mongoose";

const panelSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    tite: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
  },
  { timestamps: true }
);

type Panel = InferSchemaType<typeof panelSchema>;

export default model<Panel>("Panel", panelSchema);
