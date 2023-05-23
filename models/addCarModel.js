const mongoose = require('mongoose')


const Schema = mongoose.Schema
const addCarSchema = new Schema({
    carname: String,
    type: Number,
    model: String,
    milage: Number,
    perkm: Number,
    image: String,
    availablefrom:String,
    availabletill:String, 
    description:  String,
    cardetails:  String,
    details:  String,
})


module.exports =mongoose.model("addCar",addCarSchema);  

