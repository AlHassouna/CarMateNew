import {Schema, model} from "mongoose";

const detailsSchema = new Schema({
    time: {type: Number, required: true},
    warranty: {type: Number, required: true},
    interval: {type: Number, required: true},
});

const serviceSchema = new Schema(
    {
        name: {type: String, lowercase: true, required: true},
        cost: {type: Number, required: true},
        image: {type: String, lowercase: true, required: true},
        servicesIncluded: [{type: String, lowercase: true, required: true}],
        currency: {type: String, required: true},
        details: detailsSchema
    },
    {timestamps: true}
);

export default model("Service", serviceSchema);
