const app = require('express')();
const http = require('http').Server(app);
const config = require('./config/events.config');
const cors = require('cors');
const bodyParser = require("body-parser");
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
      }
});
const model = require('./models/events.model');
require('./routes/events.routes.js')(app);

app.use(cors())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const mongoose = require("mongoose");
const { countReset } = require('console');

mongoose.Promise = global.Promise;

mongoose
.connect(config.dburl, { useNewUrlParser: true })
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
    
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.emit('connection', null);
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        socket.on('subscribeToTimer', (interval) => {
            console.log('client is subscribing to timer interval', interval);
            setInterval(() => {
                client.emit('timer', new Date());
              }, interval);
        });
    });

    http.listen(process.env.PORT || config.port, () => {
        console.log('listening on *:' + config.port);
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


