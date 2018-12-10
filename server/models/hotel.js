var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var HotelSchema = new Schema({
    cityId: {type: ObjectId, ref: 'City'},
    title: {type: String},
    address: {type: String},
    cityName: {type: String},
    phoneNumber: {type: Number}
});
module.exports = mongoose.model('Hotel', HotelSchema);
