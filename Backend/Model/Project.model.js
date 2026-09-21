import mongoose from "mongoose";

let ProjectScheme= mongoose.Schema({
name: String,
image: String,
customer: String,
notes: String,
});

let ProjectModel=mongoose.model("Projact",ProjectScheme)

export default ProjectModel;