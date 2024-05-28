const express=require('express');
const auth=require('../controllers/AuthController');
const AuthRoutes=express.Router();
AuthRoutes.post('/register',auth.register);
AuthRoutes.post('/login',auth.login);
AuthRoutes.post('/logout',auth.logout);

module.exports=AuthRoutes;