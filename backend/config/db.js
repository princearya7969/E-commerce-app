const mongoose = require("mongoose")

const connectDB = async () =>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB connected successfully")

    }

    catch (err) {
        console.log("Error occured", err)
    }
}

module.exports = connectDB