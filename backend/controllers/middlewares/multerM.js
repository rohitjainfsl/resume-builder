import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    const filename = req.body.name + ext;
    callback(null, filename);
  },
});
const uploadPhoto = multer({ storage: storage });
export default uploadPhoto;
