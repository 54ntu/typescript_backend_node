import { config } from "dotenv";
config()
const envConfig = {
    port: process.env.PORT,
    mongodbstring: process.env.MONGODB_URL,
    environment: process.env.NODE_ENV,
    frontend: process.env.FRONTEND_URL
}

export default envConfig;