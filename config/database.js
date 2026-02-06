// getting the instance of mongoose library..
const mongoose = require("mongoose")


// all the configuration of .env file will be loaded into the process object
// means process.env.port = 4000 and process.env.database_url = mongodb://127.0.0.1:27017/blogAppDatabase
require("dotenv").config();


// function for connecting the database
const connectWithDB = ()=>{
   mongoose.connect(process.env.database_url)
   .then(console.log("Database has been connected sucessfully"))
   .catch((error)=>
{
    console.log("Database connection has not been established")
    console.log(error)
    process.exit(1)
})
};

module.exports = connectWithDB;