import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
  cuntray: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  Books: [
    {
      name: {
        require: true,
        type: String,
      },
      author: {
        require: true,
        type: String,
      },
      price: {
        require: true,
        type: Number,
      },
      category: {
        require: true,
        type: String,
      },
      img: {
        require: true,
        type: String,
      },
      seller: {
        require: true,
        type: String,
      },
    },
  ],
});

export default mongoose.model("Users", UserSchema, "Users");
