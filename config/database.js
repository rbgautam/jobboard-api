const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// console.log(process.env.DATABASE_URI);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("h");
// });


const connectDatabase = () => { mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
 }).then(con => {
   console.log(`MongoDB Database connected with host: ${con.connection.host}`);
 });
 };
 
 
module.exports = connectDatabase;