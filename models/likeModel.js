const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema(
    {
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post", // this is the refernce to the post model
        },
        user : {
            type : String,
            required : true,
        },
    }
    ,{timestamps : true})

    // now last thing is to export this model
    module.exports = mongoose.model("Like", likeSchema)