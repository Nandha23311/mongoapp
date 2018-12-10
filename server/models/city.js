var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CitySchema = new Schema({
    cityName: {type: String},
    cityCode: {type: String}
});
module.exports = mongoose.model('City', CitySchema);
