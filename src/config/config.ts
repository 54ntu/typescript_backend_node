import { config } from "dotenv";
config()
const envConfig={
    port: process.env.PORT,
    mongodbstring:process.env.MONGODB_URL
}

export default envConfig;