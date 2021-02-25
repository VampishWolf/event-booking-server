const Events = require('../models/events.model.js');

exports.main = (req, res) => {
    res.send("Win")
}

// Create and Save a new Note
exports.createEvent = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const events = new Events({
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

// Retrieve and return all notes from the database.
exports.findAllEvents = (req, res) => {
    Events.find()
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Events.findById(req.params.eventId)
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};