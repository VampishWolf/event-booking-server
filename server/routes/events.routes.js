module.exports = (app) => {
    const events = require('../controllers/events.controller');

    app.get('/', events.main);

    app.post('/api/events', events.createEvent);

    // app.post('/api/booking', events.createBooking);
    
    // Retrieve all events
    app.get('/api/events', events.findAllEvents);

    // Retrieve a single Note with noteId
    app.get('/api/events/:eventId', events.findOne);

    // Update a Note with noteId
    app.put('/api/events/:eventId', events.update);

    // Delete a Note with noteId
    app.delete('/api/events/:eventId', events.delete);
}