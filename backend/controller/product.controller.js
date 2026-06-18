const Product = require("../models/product.model")

const productData = async (req, res) =>{
    try{
        const {name, description, price, category, image} = req.body;

        const productDetails = new Product({
            name,
            description,
            price,
            category,
            image
        });

        await productDetials.save();

        res.status(201).json({
            message:"",
            data: productDetails
        });
    }

    catch (err) {
        console.log(err);
        res.status(500).json({
            message:"",
        })

    }
};

module.exports = {productData};