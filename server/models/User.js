import { Schema, model } from "mongoose";

const useCarSchema = new Schema({
  car: { type: Schema.Types.ObjectId, ref: "Car" },
  LPN: { type: Number, required: true },
});

const addressSchema = new Schema({
  city: { type: String, lowercase: true, required: true },
  street: { type: String, lowercase: true, required: true },
});

const userSchema = new Schema(
  {
    name: {
      first: { type: String, lowercase: true, required: true },
      last: { type: String, lowercase: true, required: true },
    },
    password: { type: String, required: true },
    email: { type: String, lowercase: true, required: true, unique: true },
    moblie: { type: Number, required: true },
    address: { type: addressSchema, default: {} },
    car: { type: useCarSchema, default: {} },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export default model("User", userSchema);
