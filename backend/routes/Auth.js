const express=require('express');
const auth=require('../controllers/AuthController');
const {isUser}=require('../middleware/verifyToken');
const AuthRoutes=express.Router();
AuthRoutes.post('/register',auth.register);
AuthRoutes.post('/login',auth.login);
AuthRoutes.post('/logout',auth.logout);
AuthRoutes.get('/checkUser',isUser,auth.checkUser)

module.exports=AuthRoutes;