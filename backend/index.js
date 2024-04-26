import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ResumeController from "./controllers/ResumeController.js";

const port = "8000";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/resume", ResumeController);

mongoose
  .connect("mongodb://127.0.0.1:27017/resumebuilder")
  .then(() => {
    app.listen(port, () => {
      console.log("DB Connection: OK, Server Running: OK");
    });
  })
  .catch((err) => {
    console.log(err);
  });
