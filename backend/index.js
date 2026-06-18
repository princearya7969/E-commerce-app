const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const signupRoutes = require("./routes/signup.route");
const loginRoute = require("./routes/login.route")

dotenv.config();

const app = express();

//Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

//Routes
app.use("/api/signup", signupRoutes)
app.use("/api/login", loginRoute)


//Test Route
app.get("/", (req, res) =>{
    res.send("API Running Successfully")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
