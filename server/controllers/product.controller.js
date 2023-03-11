//CRUD METHODS 

const Product = require("../models/product.model");

//CREATE NEW PRODUCT
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({product: newProduct}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}