const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    contact: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required: true
    },

    confirmpassword: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("signup", signupSchema);