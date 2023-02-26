const userService = require('../services/userServices');
const bcrypt = require('bcryptjs')

const createUser = async (req,res)=>{

    const {username, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)
    console.log(req.body)
    userService.createUser({username, password:hashpassword})
        .then( data=>{
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })


}

const getUsers = (req, res)=>{

    userService.getusers()
        .then(data =>{
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })
}

module.exports = {
    createUser,
    getUsers
}