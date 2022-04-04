import dotenv from 'dotenv';
dotenv.config()

 var config ={}; 

 config.MONGO_URI=""+process.env.MONGO_URI,
 config.JWT_SECRETE=""+process.env.JWT_SECRETE,

 module.exports =config
