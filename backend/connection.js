const mongoose = require('mongoose');
const db = `chatapp`
const dbUrl = `mongodb+srv://Laraib:gauriganj@cluster0.c14cs29.mongodb.net/${db}?retryWrites=true&w=majority`
//  asynchronous function - return promise
 mongoose.connect(dbUrl)
 .then((result) => {
    console.log('db connected');
    })
 .catch((err) => {
    console.log(err);
 });

 module.exports = mongoose;