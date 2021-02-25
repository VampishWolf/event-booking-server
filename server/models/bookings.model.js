const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookingSchema = new Schema({  
    bookingId: String,  
    userName: String,
    emailId: String,
    eventId: String,
    seats: Array,
    isAvailable: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Bookings', BookingSchema);