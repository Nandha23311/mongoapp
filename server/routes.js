const cityController = require('./controllers/city_controller')
const hotelController = require('./controllers/hotel_controller')
const bookingController = require('./controllers/booking_controller')

module.exports = function(router){
    router.post('/api/add_city', cityController.save)
    router.get('/api/get_cities', cityController.getCities)
    router.post('/api/add_hotel', hotelController.save)
    router.post('/api/get_hotels', hotelController.getHotels)
    router.post('/api/add_booking', bookingController.save)
    router.get('/api/get_bookings', bookingController.getBookings)

}