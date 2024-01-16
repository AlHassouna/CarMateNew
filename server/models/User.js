import {Schema, model} from "mongoose";

const useCarSchema = new Schema({
    car: {type: Schema.Types.ObjectId, ref: "Car"},
    LPN: {type: Number, required: true},
});

const addressSchema = new Schema({
    city: {type: String, lowercase: true, required: true},
    street: {type: String, lowercase: true, required: true},
});

const userSchema = new Schema(
    {
        name: {
            first: {type: String, lowercase: true, required: true},
            last: {type: String, lowercase: true, required: true},
        },
        password: {type: String},
        email: {type: String, lowercase: true, unique: true},
        mobile: {type: String, required: true},
        address: {type: addressSchema, default: {}},
        car: {type: useCarSchema, default: {}},
        orders: [],
    },
    {timestamps: true}
);

export default model("User", userSchema);
