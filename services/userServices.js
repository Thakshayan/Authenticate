const User = require("../models/user");


exports.createUser = ({username,password})=>{
    console.log(username,password)
    const user = new User({
        username, password
    })

    return user.save()
}

exports.getusers = ()=>{
    return User.find()
}

