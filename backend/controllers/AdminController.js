const UserModel=require('../models/User')
const getUser=async(req,res)=>{
    try{
        const users=await UserModel.find()
        res.status(200).json({users})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

const deleteUser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await UserModel.findByIdAndDelete(userId);
        if(!user){
            res.status(404).json({message:"user not found"});
        }
        res.status(200).json({message:"User deleted successfully",user});
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal server error"});
    }
}
module.exports={getUser,deleteUser}