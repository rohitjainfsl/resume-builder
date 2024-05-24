import express from "express";
import uploadPhoto from "./middlewares/multerM.js";
import ResumeModel from "../models/ResumeModel.js";
import mongoose from "mongoose";

const ResumeController = express.Router();

ResumeController.post(
  "/test",
  uploadPhoto.single("profile"),
  async (req, res) => {
    //   console.log(req.body);
    //   console.log(req.file);
    const { name, email } = req.body;
    const profile = req.file.path;
    const dataToSave = new ResumeModel({ name, email, profile });
    const savedData = await dataToSave.save();
    if (savedData._id) res.send(true);
    else res.send(false);
  }
);

export default ResumeController;
