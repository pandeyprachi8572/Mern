import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '.routes/user.route.js';
import authRouter from './routes/auth.route.ja';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
console.log('Connrcted to MongoDB!');
}).catch((err)=>{
    console.log(err);
});
const app = express();
app.use(express.json());
app.listen(3000 , ()=>{
    console.log('Server is running on prot 3000!');
}
)
app.get('/test', (req , res)=>{
    res.json({
        message : 'Hello Word!',
    })
}
);
app.use( "/api/user", userRouter );
app.use('/api/auth' , authRouter);
// this is middle ware 
app.use((err ,req ,res ,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false ,
        statusCode,
        message,
    });
});