const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    nom: {type:String, required:true},
    photo: {type:String, required:true},
    diametre: {type:String, required:false},
    temperature: {type:Number, required:true},
    masse: {type:String, required:true},
    revolution: {type:Number, required:true},
})

module.exports = mongoose.model('Product',ProductSchema);
