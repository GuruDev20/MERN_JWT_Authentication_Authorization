require('dotenv').config();
const express=require('express');
const cors=require('cors');
const DbConnection=require('./utils/db');
const AuthRoutes=require('./routes/Auth');

const app=express();

DbConnection();
app.use(express.json());
app.use(cors());
app.use('/api/auth',AuthRoutes)

app.listen(process.env.PORT,()=>{
    console.log('Server running on port 4000');
})