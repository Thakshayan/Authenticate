const jwt = require('jsonwebtoken')

module.exports = {
    ensureLogin: (req, res, next) =>{
        
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            try{
                token = req.headers.authorization.split(" ")[1]
                if (!token){
                    throw new Error("token missing")
                }
                console.log(token)
                const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
                console.log(decoded)
                req.user = decoded

                next()
            }catch( error){
                if (error.name === "TokenExpiredError"){
                    res.status(401).send("session expired")
                }else{
                    res.status(401).send("Not Authorize4d")
                }
            }

            if (!token){
                res.status(401).send("No authorization headers")
            }
        }
    }
}