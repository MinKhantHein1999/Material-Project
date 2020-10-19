const mongoose = require("mongoose");

const BlogSchemas = new mongoose.Schema({
  title: {type : String},
  body: {type : String},
  createdBy: {type : String},
  createdAt: {type :Date, default : Date.now()},
  likes: {type: Number, default: 0},
  likedBy: {type : Number},
  dislikes: {type : Array},
  comments: [
      {
          comment : {type : String},
          commentator : {type : String},
      }
  ]
});

module.exports = mongoose.model("Blog", BlogSchemas);