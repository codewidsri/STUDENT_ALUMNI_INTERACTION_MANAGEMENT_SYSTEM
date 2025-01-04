import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import UserRoutes from './routes/UserRoutes.js';

dotenv.config()

const connection=mongoose.connect(process.env.DBURL);
if(connection){
    console.log(`database connected`)
}

const app=express()
app.use(express.json())

app.use(cors())

app.use('/api/v1/users',UserRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`backend was connected to ${process.env.PORT}`);
})