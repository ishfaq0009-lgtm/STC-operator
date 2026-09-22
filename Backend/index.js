import express from "express";
import cors from "cors";
import dbconection from "./db/dbconection.js";
import userRouter from "./Routes/user.route.js";
import ProjectRouter from "./Routes/Project.route.js"
import cookieparser from "cookie-parser";
import dotenv from "dotenv"
import MemberRouter from "./Routes/Member.route.js"

 dotenv.config()
dbconection();


let app = express();

app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.use("/user", userRouter);
app.use("/Project",ProjectRouter);
app.use("/members",MemberRouter);

app.use("/",async function(req,res){
  
  return res.json({success:true,msg:"this is backend working."});
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});

