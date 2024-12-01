import { NextFunction, Request, Response } from "express";
import Note from "../models/note.models";
import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

const createNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log(req.file)
        const imagename = req.file?.filename;
        console.log(imagename)

        const { title, subtitle, description } = req.body


        // console.log(filename, title)

        if (!title || !subtitle || !description) {
            res.status(400).json({
                message: "all fields are required"
            })
        }

        const response = await Note.create({ title, description, subtitle, file: imagename })
        if (response) {
            res.status(200).json({ message: "note added succcessfully....!!!", data: response })


        } else {
            res.status(500).json({
                message: "something went wrong...1!!"
            })
        }

    } catch (error) {
        console.log(error)
        return next(createHttpError(500, "error creating note.!"))
    }



}

const getNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const notes = await Note.find()
        // console.log(notes)
        for (let d of notes) {
            d.file = "http://localhost:8000/" + d.file
        }
        if (notes.length > 0) {
            res.status(200).json({
                message: "note data fetched successfully..!!",
                data: notes
            })
        } else {
            res.status(404).json({
                message: "note data not found...!!!!"
            })
        }
    } catch (error) {
        return next(createHttpError(500, "something went wrong...!!!"))
    }
}


const getSingleNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return next(createHttpError(400, "invalid object id"))
        }
        const note = await Note.findById(id)
        // console.log(notes)
        if (note) {
            note.file = "http://localhost:8000/" + note.file
            res.status(200).json({
                message: "note fetched successfully..!!!",
                data: note
            })
        } else {
            res.status(404).json({
                message: "note with given id is not found..!!"
            })
        }


    } catch (error) {
        return next(createHttpError(500, "something went wrong...!!!"))
    }
}


const deletenote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return next(createHttpError(400, "invalid object id"))
        }
        await Note.findByIdAndDelete(id)
        res.status(200).json({
            message: "note deleted successfully..!!"
        })
    } catch (error) {
        return next(createHttpError(500, "something went wrong"))
    }

}

export { createNote, getNote, getSingleNote, deletenote };