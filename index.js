const express = require("express")

const app  = express();
app.listen(3000,()=>{
    console.log("app has started sucessfully")
})

app.get('/',(req,res)=>{
    res.send("hello we are making a blogging app!")
})