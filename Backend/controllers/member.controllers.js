import MemberModel from "../Model/memberModel.js";



async function memberPage (req,res){

    let {name,address,phoneNo,post}=req.body

    let memberData={
        name,
        address,
        phoneNo,
        post,
    };

    await MemberModel.create(memberData)

    return res.json({success:true,msg:"This is memeber successfully."})
};

export {
    memberPage
}