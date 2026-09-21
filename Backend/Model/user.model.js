import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

let usermodel = mongoose.model("UserData", userSchema);

export default usermodel;
