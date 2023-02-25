const bcrypt = require('bcryptjs')
const User = require("../models/user")
const jwt = require('jsonwebtoken')

exports.login = async ({username, password, remember})=>{
    const user = await User.findOne({username})
    console.log(user)
    if (user && await bcrypt.compare(password, user.password)){
        console.log(password)
        const encryptedUser = {
            user:{
                username:user.username
            },
            type:'authorization',
            role:'user'

        }
        let detail = JSON.parse(JSON.stringify(user))
        delete detail.password

        return {
            accessToken : generateAccessToken(encryptedUser),
            refreshToken : generateRefreshToken(encryptedUser,remember),
            user: detail
        }

    }else{
        throw new Error("No credentials")
    }
}


const generateAccessToken = (object)=>{
    return jwt.sign(object, process.env.ACCESS_TOKEN,{ 
        expiresIn:'1h'
    })
}

const generateRefreshToken = (object,remember)=>{
    return jwt.sign(object, process.env.ACCESS_TOKEN,{ 
        expiresIn:remember? '4d':'5d'
    })
}