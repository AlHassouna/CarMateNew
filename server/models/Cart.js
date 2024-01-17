import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    id: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Cart", cartSchema);
