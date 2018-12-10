var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var bookingSchema = new Schema({
    hotel: {type: ObjectId, ref: 'Hotel'},
    cityName: {type: String},
});
module.exports = mongoose.model('booking', bookingSchema);
