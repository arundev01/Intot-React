
const mongoose = require("mongoose");

const registrationSchema = {
    name: String,
    email: String,
    phone: String
    
}

const Register = mongoose.model("Register",registrationSchema);

module.exports = Register;