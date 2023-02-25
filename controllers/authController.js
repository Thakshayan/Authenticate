const authService = require('../services/authServices')

const login = async (req, res)=>{
    const {username, password, remember} = req.body

    try{
        const user = await authService.login({username, password, remember})
        res.json(user)
    }catch(error) {
        res.status(401).send(error.message)
    }
}

module.exports = {
    login
}