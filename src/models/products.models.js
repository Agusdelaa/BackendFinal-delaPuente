import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const productCollection= "products";
const productsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        default: "admin"
    },
    thumbnails: []
});

productsSchema.plugin(paginate);

export const productModel = model(productCollection, productsSchema);