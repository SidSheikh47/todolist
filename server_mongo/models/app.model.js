import mongoose from "mongoose"

const todolist = new mongoose.Schema({
  item:  String,
  status: Number
});

export default mongoose.model('notes', todolist)