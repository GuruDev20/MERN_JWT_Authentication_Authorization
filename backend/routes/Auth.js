const express=require('express');
const register = require('../controllers/AuthController');
const AuthRoutes=express.Router();
AuthRoutes.post('/register',register);

module.exports=AuthRoutes;