const express = require("express")
const router = express.Router();

const{ signupData} = require("../controller/signup.controller");

router.post("/", signupData);

module.exports = router; 