import mongoose from "mongoose";

const tuitsSchema = mongoose.Schema({
  topic: String,
  username: String,
  time: String,
  title: String,
  image: String,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  likes: Number,
  dislikes: Number,
  handle: String,
  tuit: String
}, {collection: "tuits"});

export default tuitsSchema;