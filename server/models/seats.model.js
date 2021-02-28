const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SeatSchema = new Schema({  
    eventId: String,
    seatsBooked: Array
});

module.exports = mongoose.model('Seat', SeatSchema);