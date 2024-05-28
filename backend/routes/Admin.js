const express=require('express');
const admin=require('../controllers/AdminController');
const {isAdmin}=require('../middleware/verifyToken');
const AdminRoutes=express.Router();
AdminRoutes.get('/getUsers',isAdmin,admin.getUser)
AdminRoutes.delete('/delete/:id',isAdmin,admin.deleteUser)

module.exports=AdminRoutes;