require('dotenv').config();
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const DbConnection=require('./utils/db');
const AuthRoutes=require('./routes/Auth');
const AdminRoutes=require('./routes/Admin');

const app=express();

DbConnection();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.listen(process.env.PORT,()=>{
    console.log('Server running on port 4000');
})