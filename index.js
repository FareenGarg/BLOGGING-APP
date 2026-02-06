const express = require("express")
const app  = express();


require("dotenv").config();
const PORT = process.env.port || 3000


// use of middleware
app.use(express.json());

// importing the routes file
const blog = require("./routes/blog")

//mount
app.use("/api/v1", blog);


// calling the database and connecting with the database
const connectWithDatabase = require("./config/database")
connectWithDatabase();

app.listen(PORT,()=>{
    console.log("app has started sucessfully", PORT)
})

app.get('/',(req,res)=>{
    res.send("hello we are making a blogging app!")
})

