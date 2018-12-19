const ProductModel = require('../models/products');

exports.getAllProducts = (req,res,next) => {
    console.log('rsss');
    ProductModel.find()
    .then((documents) =>{
      res.status(200).json({
          message:'products fetch success',
          products: documents
      });
    });
}
exports.addProduct = (req,res, next) => {
    const product = new ProductModel(req.body);
    console.log(product);
    product.save();
    res.status(201).json({
        message:'add product Successfully'
    });
}

exports.updateProduct = (req,res,next) => {
    console.log(req.body);
    ProductModel.updateOne({_id:req.params.id}, req.body)
    .then((data) => {
        res.status(201).json({
            message: `product updated! ${req.params.id}`,
            data: data
        });
    })
    .catch((err => {
        res.status(401).json({
            message: 'fail to update!'
        })
    }))
}
exports.deleteProduct = (req,res,next) => {
    console.log(req.params.id);
        ProductModel.deleteOne({_id:req.params.id})
        .then((data) => {
            res.status(201).json({
                message: `product with id=${req.params.id} deleted!`,
                data: data
            });
        })
        .catch((err => {
            res.status(401).json({
                message: 'Deletion failed!'
            })
        }))
}