const mongoose = require("mongoose")

// writing the router handler

const postSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        body : {
            type : String,
            required : true
        },
        likes : [
            {
               type : mongoose.Schema.Types.ObjectId,
               ref : "Like",
            }
        ],
        comments : [
            {
               type : mongoose.Schema.Types.ObjectId,
               ref : "Comment",
            }
        ]
    }
    ,{timestamps : true})

    // now last thing is to export this model
    module.exports = mongoose.model("Post", postSchema)
