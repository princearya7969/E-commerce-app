const Signup = require("../models/signup.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const loginUser = async (req, res) =>{
            const { email, password } = req.body;

    try{

        //Email se user find le liye
        const user = await Signup.findOne({email}).select('+password');

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        
        
        //Success response
        res.status(200).json({
            message: "Login successfully",
            user: user.name
        });
    }

    catch (error){
        res.status(500).json({
            message: "Internal server error"
        });
    }

};


module.exports = {loginUser};
