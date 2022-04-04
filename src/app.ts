import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

const app: Application = express();

dotenv.config();

connectDB();

app.use(express.json());



app.get("/api", (req: Request, res: Response) =>  {
    res.status(201).json({ message: "Welcome to auth ts" });
})




const PORT = process.env.PORT || 8080;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));