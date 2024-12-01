import express from "express"
import { createNote } from "../controllers/note.controllers";
const noteRoute = express.Router()


noteRoute.route("/").post(createNote)


export default noteRoute;