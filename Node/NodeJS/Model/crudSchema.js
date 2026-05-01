import mongoose from "mongoose";

const studentData = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const student = mongoose.model("students", studentData,"NewTable")

export default student