import { Schema, model } from "mongoose";

const categories = [
  "Brake System",
  "Filters",
  "Engine",
  "Body",
  "Suspension",
  "Windscreen Cleaning System",
  "Steering",
  "Clutch",
  "Electric System",
  "Doors",
  "Tyres",
];

const partSchema = new Schema(
  {
    name: { type: String, lowercase: true, required: true },
    cost: { type: Number, required: true },
    image: { type: String, lowercase: true, required: true },
    categorey: {
      type: String,
      lowercase: true,
      required: true,
      enum: categories,
    },
    cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
  },
  { timestamps: true }
);

export default model("Part", partSchema);
