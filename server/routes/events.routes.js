module.exports = (app) => {
    const controller = require('../controllers/events.controller');

    app.get('/', controller.main);

    // Retrieve all genres
    app.get('/api/genres', controller.findGenres);
    
    
    // Create an event
    app.post('/api/events', controller.createEvent);
    
    // Retrieve all bookings
    app.get('/api/bookings', controller.findBookings);
    
    // Create an booking
    app.post('/api/bookings', controller.createBookings);
    
    // Retrieve a availability for event with eventId
    app.get('/api/seats/:eventId', controller.seatAvailability);

    // Retrieve all events
    app.get('/api/events', controller.findAllEvents);

    // Retrieve a single event with genre
    app.get('/api/events/:genre', controller.findOne);
    
    // Retrieve a single event
    app.get('/api/selectedEvent/:eventId', controller.findEvent);
    
    // Update a Note with noteId
    app.put('/api/events/:eventId', controller.update);

    // Delete a Note with noteId
    app.delete('/api/events/:eventId', controller.delete);
}