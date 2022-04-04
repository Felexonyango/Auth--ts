import mongoose, { ConnectOptions} from 'mongoose';
import {MONGO_URI} from './confg'
const connectDB = async () => {
    
    try {
        await mongoose.connect(  MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log("Database is connected");
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;