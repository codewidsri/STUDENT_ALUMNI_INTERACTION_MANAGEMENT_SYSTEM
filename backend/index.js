import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import UserRoutes from './routes/UserRoutes.js';

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/users',UserRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`backend was connected to ${process.env.PORT}`);
})