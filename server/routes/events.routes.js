module.exports = (app) => {
    const controller = require('../controllers/events.controller');

    app.get('/', controller.main);

    // Retrieve all genres
    app.get('/api/genres', controller.getGenres);
    
    // Create an event
    app.post('/api/events', controller.createEvent);
    
    // Create an booking
    app.post('/api/booking', controller.createBooking);
    
    // Retrieve all events
    app.get('/api/events', controller.findAllEvents);

    // Retrieve a single event with genre
    app.get('/api/events/:genre', controller.findOne);

    // Update a Note with noteId
    app.put('/api/events/:eventId', controller.update);

    // Delete a Note with noteId
    app.delete('/api/events/:eventId', controller.delete);
}