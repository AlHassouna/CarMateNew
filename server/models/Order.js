import {Schema, model} from "mongoose";

const addressSchema = new Schema({
    city: {type: String, lowercase: true, required: true},
    street: {type: String, lowercase: true, required: true},
});

const partItemSchema = new Schema({
    item: {},
    amount: {type: Number, required: true},
    discount: {type: Number, required: true},
});

const serviceItemSchema = new Schema({
    item: {},
    amount: {type: Number, required: true},
    discount: {type: Number, required: true},
});

const orderSchema = new Schema(
    {
        carParts: [partItemSchema],
        carServices: [serviceItemSchema],
        user: {type: Schema.Types.ObjectId, ref: "User", required: true},
        address: {type: addressSchema},
        date: {type: Date, default: Date.now},
        total: {type: Number, required: true},
    },
    {timestamps: true}
);

export default model("Order", orderSchema);
