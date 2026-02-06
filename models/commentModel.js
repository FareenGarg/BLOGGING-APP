const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post", // this is the refernce to the post model
        },
        user : {
            type : String,
            required : true,
        },
        body : {
            type : String,
            reqiuired : true,
        }
    }
    ,{timestamps : true})

    // now last thing is to export this model
    module.exports = mongoose.model("Comment", commentSchema)