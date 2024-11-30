import mongoose from "mongoose";
import envConfig from "./config";

const connectDB =async()=>{
   try {
    const connectionstats=await mongoose.connect(`${envConfig.mongodbstring}`)
    if(connectionstats){
        // console.log(connectionstats)
        console.log("db is connected successfully..!!!")
    }
} catch (error) {
    console.log("failed to connect db..!!!")
    process.exit(1);
   }
}


export default connectDB;