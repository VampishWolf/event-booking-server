const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    value: String  
})

module.exports = mongoose.model('Genres', GenreSchema);
