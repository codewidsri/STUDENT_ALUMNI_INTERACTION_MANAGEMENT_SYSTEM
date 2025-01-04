import { Router } from "express"
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import AuthMiddleWare from "../middleware/AuthMiddleWare.js"

const router = Router()

router.post('/register', async (req, res, next) => {
    const { name, email, password, role } = req.body
    const userexist = await User.findOne({ email });
    if (userexist) {
        return res.status(401).json({ message: "email is already registered" })
    }
    const hashedpassword=await bcrypt.hash(password,10);
    const newuser = await User.create({ name, email, password:hashedpassword, role, isAlumni: role == 'alumni' ? true : false, isStudent: role == 'student' ? true : false });
    if (newuser) {
        return res.status(201).json({ message: "Registered successfully" })
    }
    else {
        return res.status(400).json({ message: "Registration was not successfull Try again!!!" })
    }
})

router.post('/login',async (req,res,next)=>{
     const {email,password}=req.body
     const user=await User.findOne({email})
     if(user && await bcrypt.compare(password,user.password))
     {
        return res.status(200).json({
            message:"logged in successfull",
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            isAlumni:user.isAlumni,
            isStudent:user.isStudent,
            token:jsonwebtoken.sign({email},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        })
     }
     else{
        return res.status(401).json({message:"Invalid Email id or Password"})
     }
})

router.get('/home',AuthMiddleWare,(req,res)=>{
    res.write("welcome bhai")
})

export default router;