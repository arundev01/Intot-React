const express = require("express");
const router = express.Router();
const Register = require("../models/registrationModel");

router.route("/register").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const newRegister = new Register({
        name,
        email,
        phone
    })

    newRegister.save();
})

module.exports = router;

