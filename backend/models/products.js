const mongoose = require('mongoose');
const productContent = mongoose.Schema({
    size:{type:String},
    depth:{type:String},
    shape: {type:String},
    usage: {type:String}
})
const productSchema = mongoose.Schema({
    title:{type:String},
    content: productContent,
    cat: {type:String},
    type: {type:String},
    img: {type:String},
    qtyIn:{type:String},
    cost:{type:String}, 
    stock:{type:String}
});
module.exports = mongoose.model('Product', productSchema);