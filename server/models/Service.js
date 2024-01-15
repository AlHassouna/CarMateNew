import { Schema, model } from "mongoose";

const detailsSchema = new Schema({
  time: { type: Number, required: true },
  warranty: {},
  interval: {},
});

const serviceSchema = new Schema(
  {
    name: { type: String, lowercase: true, required: true },
    cost: { type: Number, required: true },
    image: { type: String, lowercase: true, required: true },
    servicesIncluded: [{ type: Schema.Types.ObjectId, ref: "Service" }],
    details: {},
  },
  { timestamps: true }
);

export default model("Service", serviceSchema);
