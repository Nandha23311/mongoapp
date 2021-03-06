const responseCtrl = require('./response_controller')
let Booking = require('../models/bookings')
let mongoose = require('mongoose')

exports.save = (req, res)=>{
    let reqBody = req.body;
    let newBooking = new Booking({
        hotel: mongoose.Types.ObjectId(reqBody.hotelId),
        cityName: reqBody.cityName.toLowerCase(),
    })
    newBooking.save(function(saveErr,saved){
        if(saveErr){
            return responseCtrl.SendInternalError(res,"Error while saving data")
        }
        if(saved){
            return responseCtrl.SendSuccess(res,saved)
        }
    })
}

exports.getBookings = (req, res)=>{
    let reqBody = req.body
    Booking.find({}).populate('hotel').exec(function(findErr, bookings){
        if(findErr){
            return responseCtrl.SendInternalError(res, "Error while finding data")
        }
        return responseCtrl.SendSuccess(res,bookings)
    })
}