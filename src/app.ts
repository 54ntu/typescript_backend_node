import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import noteRoute from "./routes/note.routes";
const app = express();

app.use("/api/notes",noteRoute) // route for noteroutes
app.use(globalErrorHandler)
export default app;