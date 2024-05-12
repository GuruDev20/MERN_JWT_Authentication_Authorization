const UserModel=require('../models/User');
const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        res.send('Registering...');
    }
    catch(error){
        console.log(error);
    }
}
 module.exports=register;