import mongoose from "mongoose";

const resumeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
});

const ResumeModel = mongoose.model("resumemodel", resumeSchema, "resume");
export default ResumeModel;
