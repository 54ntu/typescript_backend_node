import { Request } from "express"
import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req:Request, file:Express.Multer.File  , cb:any) {
    cb(null, './src/public')
  },
  filename: function (req:Request, file:Express.Multer.File, cb:any) {
   const imagename = Date.now() + file.originalname
    cb(null, imagename)
  }
})

const upload = multer({ storage: storage })
export default upload;