import { Schema, model } from "mongoose";

const partSchema = new Schema(
  {
    name: { type: String, lowercase: true, required: true },
    cost: { type: Number, required: true },
    image: { type: String, lowercase: true, required: true },
    categorey: {
      type: String,
      lowercase: true,
      required: true,
    },
      currency:  { type: String, lowercase: true, required: true },
    cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
  },
  { timestamps: true }
);

export default model("Part", partSchema);
