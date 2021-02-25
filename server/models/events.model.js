const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EventSchema = new Schema({  
    eventId: String,  
    title: String,
    description: String,
    genre: String,
    seats: Number,
    isAvailable: Boolean,
    eventimg:
    {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Events', EventSchema);