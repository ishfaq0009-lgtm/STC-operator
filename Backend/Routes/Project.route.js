import express from "express";
import ProjectModel from "../Model/Project.model.js";
import upload from "../middlewares/multer.middleware.js";

let router = express.Router();

router.post("/ProjectsApi", upload.single("image"), async function (req, res) {
  try {
    console.log(req.body);
    console.log(req.file);

    // Field names match karain
    let projectData = await ProjectModel.create({
      name: req.body.name,
      customer: req.body.customer,
      notes: req.body.notes,
      image: req.file ? req.file.path : "" // Cloudinary image URL
    }); 

    if (projectData) {
      return res.json({ success: true, msg: "The project is created", project: projectData });
    }
    return res.json({ success: false, msg: "Failed to create project" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, msg: error.message });
  }
});

router.get("/GetProject", async function (req, res) {
  try {
    let projectGetData = await ProjectModel.find();
    return res.json({
      success: true,
      msg: "Data fetched successfully",
      project: projectGetData,
    });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
});

router.post("/getOneProject", async function (req, res) {
let Updata=req.body;
  
  let getOneProjectdata = await ProjectModel.findOne({ _id: Updata.id });

  // console.log("ID:", Updata.id);

  if (getOneProjectdata) {
    return res.json({ success: true, msg: "Working", project: getOneProjectdata });
  }
  return res.json({ success: false, msg: "Not found" });
});

router.post("/UpdataProject", async function (req, res) {

  let UpdataProjectData = await ProjectModel.findOneAndUpdate(
    { _id: req.body.id },
    {
      name: req.body.name,
      customer: req.body.customer,
      notes: req.body.notes
    },
  );

  if (UpdataProjectData) {
    return res.json({ success: true, msg: "Updated successfully",});
  }
  return res.json({ success: false, msg: "Update failed" });
});

// Fixed typo in endpoint: /DeleteProject
router.post("/DeleteProject", async function (req, res) {
  await ProjectModel.findOneAndDelete({ _id: req.body.id });
  // Fixed typo: success
  return res.json({ success: true, msg: "Deleted successfully" });
});

export default router;