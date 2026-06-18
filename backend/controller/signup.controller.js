const Signup = require('../models/signup.model')


const signupData = async (req, res) => {
   
    // signup
    try{
        const {fullname, contact, email, password, confirmpassword} = req.body;

        const signupDetails = new Signup({
            fullname,
            contact,
            email,
            password,
            confirmpassword,
        });

        await signupDetails.save();

        res.status(201).json({
            message: "User registered successfully",
            data: signupDetails
        });
    }

    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = { signupData };

