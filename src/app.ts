import express from "express";
import cors from "cors"
import globalErrorHandler from "./middlewares/globalErrorHandler";
import noteRoute from "./routes/note.routes";
import envConfig from "./config/config";
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./src/public"))
app.use(cors({
    origin: envConfig.frontend
}))

app.use("/api/notes", noteRoute) // route for noteroutes
app.use(globalErrorHandler)
export default app;