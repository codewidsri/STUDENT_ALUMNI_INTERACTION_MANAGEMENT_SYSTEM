import jsonwebtoken from 'jsonwebtoken'
import User from '../models/User.js'

const AuthMiddleWare= async (req,res,next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token=req.headers.authorization.split(" ")[1]
            const decoded=jsonwebtoken.verify(token,process.env.JWT_SECRET_KEY)
            if (!decoded) { return res.status(401).json({message:"UnAuthorized Access"})}
            const user=User.findOne(decoded.email)
            console.log(user)
            next()
        } catch (error) {
            
        }
    }
}

export default AuthMiddleWare;