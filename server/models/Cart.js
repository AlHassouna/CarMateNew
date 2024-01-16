import {Schema, model} from "mongoose";


const cartSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    items: [{type: Schema.Types.ObjectId, ref: "Part", required: true}],
    services: [{type: Schema.Types.ObjectId, ref: "Service", required: true}],
    total: {type: Number, required: true},
    date: {type: Date, default: Date.now, required: true},
}, {timestamps: true});

export default model("Cart", cartSchema);
