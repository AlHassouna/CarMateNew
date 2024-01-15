import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  city: { type: String, lowercase: true, required: true },
  street: { type: String, lowercase: true, required: true },
});

const partItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Part", required: true },
  amount: { type: Number, required: true },
  discount: { type: Number, required: true },
});

const serviceItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  amount: { type: Number, required: true },
  discount: { type: Number, required: true },
});

const orderSchema = new Schema(
  {
    carParts: [partItemSchema],
    carServices: [serviceItemSchema],
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: { type: addressSchema, required: true },
    date: { type: Date, default: Date.now, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
