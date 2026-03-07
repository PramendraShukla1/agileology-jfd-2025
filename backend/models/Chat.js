const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    role:{
        type: String,
        enum: ["user", "model"],
        required: true
    },
    content:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now,
    }
})

const chatSchema = new mongoose.Schema(
    {
        sessionId:{
            type: String,
        required: true,
        unique: true
        },
        title:{
            type: String,
        default: "new chat",
        },
        messages: [messageSchema],
    },
    {timestamps: true}
)
module.exports = mongoose.model("Chat", chatSchema)