//CRUD METHODS 

const Product = require("../models/product.model");

//CREATE NEW PRODUCT
module.exports.createProduct = (req, res) => {
    // passing the body in to the request because we are submittimg a form
    Product.create(req.body)
        .then((newProduct) => res.json({product: newProduct}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

//GET ALL PRODUCTS
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch(err=>res.json({message:"Something went wrong", error:err}));
}

//GET ONE PROUDUCT
module.exports.findOneProduct = (req, res) => {
    // params = paramaters and then we can name it whatever we want (id). then need to use the name to call in the route
    Product.findOne({_id : req.params.id})
        .then((oneProduct) => {
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch(err=>res.json({message:"Something went wrong", error:err}));
}