const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Need a user name"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Need a password"]
    }
}, { timestamps: true})

module.exports = mongoose.model("user",userSchema )