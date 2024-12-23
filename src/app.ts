import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI!);

app.listen(PORT, ()=>console.log("Server is running"));
