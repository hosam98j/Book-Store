import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/myApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("database connected"));
