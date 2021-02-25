const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EventSchema = new Schema({  
    eventId: String,  
    title: String,
    description: String,
    category: String,
    seats: Number,
    isAvailable: Boolean
}, {
    timestamps: true
});

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

module.exports = mongoose.model('Events', EventSchema);