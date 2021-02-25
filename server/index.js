const app = require('express')();
const http = require('http').Server(app);
const dbConfig = require('./config/db.config');
const io = require('socket.io')(http);
const model = require('./models/events.model');
require('./routes/events.routes.js')(app);

const mongoose = require("mongoose");
const { countReset } = require('console');

mongoose.Promise = global.Promise;

mongoose
.connect(dbConfig.url, { useNewUrlParser: true })
// .then(() => {

//         io.on('connection', (socket) => {
//             console.log('a user connected');
//             socket.on('disconnect', () => {
//                 console.log('user disconnected');
//               });
//         });
          
        // http.listen(5000, () => {
        //     console.log('listening on *:5000');
        // });
// 	})
.then(() => {
    console.log("Successfully connected to the database");  
    
    // app.get('/api/events', (req, res) => {
    //     async function getEvents() {
    //         const eventList = await Events.find();
    //        //  console.log(eventList);
    //        res.send(eventList);
    //        }
    //   });

      http.listen(5000, () => {
        console.log('listening on *:5000');
    });

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const Events = model;

async function createEvent() {
    const events = new Events({
        title: "SpiderMan",
        description: "SpiderMan",
        category: "Technical",
        seats: 50,
        isAvailable: true
    })
    const result = await events.save(); 
    console.log(result);
}

// createEvent();


