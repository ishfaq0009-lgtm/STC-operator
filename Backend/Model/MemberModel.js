import mongoose from "mongoose";

let MemberScheme= mongoose.Schema({

name:String,
post:String,
phoneNo: String,
address:String

});


let MemberModel= mongoose.model("member", MemberScheme);

export default MemberModel;