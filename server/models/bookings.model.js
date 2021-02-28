const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookingSchema = new Schema({  
    bookingId: String,  
    name: String,
    emailId: String,
    eventId: String,
    mobile: String,
    seatsBooked: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Bookings', BookingSchema);