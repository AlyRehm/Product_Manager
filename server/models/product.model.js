const mongoose =require("mongoose");

//TITLE, PRICE AND DESCRIPTION
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
}, {timestamps:true} 
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;