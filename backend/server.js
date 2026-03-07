const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// require("dotenv").config()


const chatRoutes = require("./routes/Chat")

const app = express();
const PORT = 5009 || 5010

// Middleware
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())

// Routes
app.use("/api/chat", chatRoutes)

app.get("/", (req,res)=>{
    res.json({status:"Gemini API is working!"})
})

// connect to database and server
mongoose.connect('mongodb+srv://shuklapramendra99_db_user:5Zof7yQIvjwhEbjY@cluster0.udxysjv.mongodb.net/agl').then(()=>{
    console.log("Connected to the database!")
    app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch((err)=>{
    console.log("mongoDB Connection failed", err.message)
    process.exit(1)
})
