
import app from "./src/app";
import envConfig from "./src/config/config";


app.listen(envConfig.port,()=>{
    console.log(`server is listening at port ${envConfig.port}`)
})