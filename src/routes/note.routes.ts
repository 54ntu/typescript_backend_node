import express from "express"
import { createNote } from "../controllers/note.controllers";
import upload from "../middlewares/multer.middlewares";
const noteRoute = express.Router()


noteRoute.route("/create").post(upload.single("image"), createNote)


export default noteRoute;