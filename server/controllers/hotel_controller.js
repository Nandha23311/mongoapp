const responseCtrl = require('./response_controller')
let Hotel = require('../models/hotel')
let mongoose = require('mongoose')
exports.save = (req, res)=>{
    let reqBody = req.body;
    let newHotel = new Hotel({
        title: reqBody.title,
        cityName: reqBody.cityName.toLowerCase(),
        cityId: mongoose.Types.ObjectId(reqBody.cityId),
        address: reqBody.address,
        phoneNumber: reqBody.phoneNumber
    })
    newHotel.save(function(saveErr,saved){
        if(saveErr){
            return responseCtrl.SendInternalError(res,"Error while saving data")
        }
        if(saved){
            return responseCtrl.SendSuccess(res,saved)
        }
    })
}

exports.getHotels = (req,res)=>{
    let reqBody = req.body
    let cityName = reqBody.cityName.toString().toLowerCase();
    Hotel.find({cityName: cityName}).populate("cityId").exec(function(findErr, hotels){
        if(findErr){
            return responseCtrl.SendInternalError(res, "Error while finding data")
        }
        return responseCtrl.SendSuccess(res,hotels)
    })
}