
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';


mongoose.connect(mongoURL);


const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to database ");
});
db.on('error',(e)=>{
    console.log("Mongoose connection error ",err);
});
db.on('disconnected',()=>{
    console.log("Disconnected to database ");
});

module.exports =db;