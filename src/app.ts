import * as dotenv from 'dotenv';
import express, { Application, Request, Response,NextFunction } from 'express';

import connectDB from './config/db';
import  UserRoutes from './routes/UserRoutes'
const app: Application = express();
import cors from 'cors';

dotenv.config();


connectDB();
app.use(cors())
app.use(express.json());

// User Route
app.use("/api", UserRoutes);

app.get('/test', (req: Request, res: Response) => {
    res.json({message:'ok'})
 })




const PORT =  8000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));