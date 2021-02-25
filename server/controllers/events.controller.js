const genres = require('../models/genres.model.js');
const events = require('../models/events.model.js');
const bookings = require('../models/bookings.model.js');
const config = require('../config/events.config');

exports.main = (req, res) => {
    res.send("Win")
}

// Create and Save a new event
exports.createEvent = (req, res) => {
    res.header("Access-Control-Allow-Origin", config.clienturl );
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const events = new events({
        title: "SpiderMan",
        description: "SpiderMan",
        category: "Technical",
        seats: 50,
        isAvailable: true
    })
    events.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        })
    })
};

// Retrieve and return all events from the database.
exports.findAllEvents = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    events.find()
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

// Find a single note with a eventId
// exports.findOne = (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*" );
//     events.findById(req.params.eventId)
//     .then(events => {
//         res.send(events);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving notes."
//         })
//     })
// };

exports.findOne = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*" );
    events.find({genre: req.params.genre})
    .then(events => {
        events ? res.send(events) : null;
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

// Update a note identified by the eventId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified eventId in the request
exports.delete = (req, res) => {

};

// -------------------------------------------------------------------------
// Retrieve and return all the genres from the database.
exports.getGenres = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*" );
    genres.find()
    .then(genres => {
        res.send(genres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

//---------------------------------------------------------------------------
// Create and Save a new Booking
exports.createBooking = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*" );
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // const events = new events({
    //     title: "SpiderMan",
    //     description: "SpiderMan",
    //     category: "Technical",
    //     seats: 50,
    //     isAvailable: true
    // })

    bookings.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        })
    })
};