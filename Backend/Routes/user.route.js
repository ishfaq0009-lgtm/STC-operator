import express from "express";
import usermodel from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbconection from "../db/dbconection.js";

let router = express.Router();

router.post("/Registration", async function (req, res) {
  dbconection()
  let RegistrData = req.body;
// console.log("RegistrData:", RegistrData);
  let hashPassword = await bcrypt.hash(RegistrData.password, 10);

  let userData= await usermodel.create({
    name: RegistrData.name,
    email: RegistrData.email,
    role: RegistrData.role,
    password: hashPassword,
  });

  let data={
    id: userData._id,
    role: userData.role
  };

  let token=jwt.sign(data,"ishfaq123")

  console.log(token, "this token is working")

  res.cookie("stc-operator",token)

  return res.json({success:true,msg:"this is token working"})

});



router.post("/Login", async function (req, res) {

  let LoginDataApi = await usermodel.findOne({email: req.body.email,role: req.body.role,});

 
  if (!LoginDataApi) {
    return res.json({success: false,msg: "this email & role is not found from user."});
  }


  
  let hashPassword = LoginDataApi.password;
  let normalPassword = req.body.password;
  let result = await bcrypt.compare(normalPassword, hashPassword);


  
  if (result == false) {
return res.json({success:false,msg: "this password is incorrect"})
  } else {
    return res.json({ success: true, msg: "your are login" });
  }
});



router.get("/checkMe", async function(req,res){
  let token= req.cookies?.["stc-operator"]
  if(!token){
      return res.json({success:false, msg:"this token not found"})
  }

try{

  let result= jwt.verify(token,"ishfaq123")
  if(!result){
return res.json({success:false, msg:"this is result is not correct"})
  }

  if(result.role=="Admin"){
    return res.json({success:true,msg:"This is login is successfull"})
  }
  return res.json({success:false,msg:"this user is not authorzeb beacuae not admin."})
} catch(error){
return res.json({success:false,msg:"this is not authorzeb"})
}
});
  

// router.get("/checkUser", async function (req, res) {
//   let tokenlogin = req.cookies?.["stc-operator"];

//   if (!tokenlogin) {
//     return res.json({
//       success: false,
//       msg: "This login token not found",
//     });
//   }

//   try {
//     let result = jwt.verify(tokenlogin, "ishfaq123");

//     return res.json({
//       success: true,
//       msg: "User is login successfully",
//       user: result,
//     });

//   } catch (error) {
//     return res.json({
//       success: false,
//       msg: "This token is not authorized",
//     });
//   }
// });

// router.get("/Logout", async function (req, res) {
//   res.clearCookie("stc-operator", {
//     httpOnly: true,
//     sameSite: "lax",
//   });

//   return res.json({
//     success: true,
//     msg: "Logout successfully",
//   });
// });



export default router;
