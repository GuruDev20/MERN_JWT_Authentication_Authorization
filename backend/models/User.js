const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['admin','seller','user'],default:'user'}

})

const UserModel=mongoose.model('User',UserSchema,'User');
module.exports=UserModel