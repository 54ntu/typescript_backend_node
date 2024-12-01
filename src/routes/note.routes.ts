import express from "express"
import { createNote, deletenote, getNote, getSingleNote } from "../controllers/note.controllers";
import upload from "../middlewares/multer.middlewares";
const noteRoute = express.Router()


noteRoute.route("/create").post(upload.single("image"), createNote)
noteRoute.route("/getnotes").get(getNote)
noteRoute.route("/getnote/:id").get(getSingleNote)
noteRoute.route("/delete/:id").delete(deletenote)





export default noteRoute;