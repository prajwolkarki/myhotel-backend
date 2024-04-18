
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = process.env.CONNECTION_STRING;


// mongoose.connect(mongoURL_Remote);
mongoose.connect(mongoURL);


const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to database ");
});
db.on('error',(err)=>{
    console.log("Mongoose connection error ",err);
});
db.on('disconnected',()=>{
    console.log("Disconnected to database ");
});

module.exports =db;