const db = require('mongoose');

db.connect('mongodb://localhost/beltDB');

db.Promise = global.Promise;

db.connection.on('error', (err) => console.error(`Mongoose default connection error: ${err}`) );
