
import app from "./src/app";
import envConfig from "./src/config/config";
import connectDB from "./src/config/db";


connectDB()
.then(()=>{
    app.listen(envConfig.port,()=>{
        console.log(`server is listening at port ${envConfig.port}`)
    })
})
.catch((error)=>{
    console.log('something went wrong')
})