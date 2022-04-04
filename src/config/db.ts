import mongoose, { ConnectOptions} from 'mongoose';
import {MONGO_URI} from './confg'
const connectDB = async () => {
    // const MONGO_URI= "mongodb+srv://mern:mern@cluster0.prv2x.mongodb.net/myFirstDatabase?retryWrites=true"
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