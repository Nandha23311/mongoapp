const responseCtrl = require('./response_controller')
let City = require('../models/city')

exports.save = (req, res)=>{
    let reqBody = req.body;
    City.findOne({cityName: reqBody.cityName},function(findErr, city){
        if(findErr){
            return responseCtrl.SendInternalError(res, "Error while finding data")
        }
        if(city == null){
            let newCity = new City({
                cityName: reqBody.cityName.toString().toLowerCase()
            })
            newCity.save(function(saveErr,saved){
                if(saveErr){
                    return responseCtrl.SendInternalError(res,"Error while saving data")
                }
                if(saved){
                    return responseCtrl.SendSuccess(res,saved)
                }
            })
        }else{
            return responseCtrl.SendSuccess(res,city)
        }
    })
}

exports.getCities = (req, res)=>{
    City.find({},function(findErr, cities){
        if(findErr){
            return responseCtrl.SendInternalError(res, "Error while finding data")
        }
        return responseCtrl.SendSuccess(res,cities)
    })
}