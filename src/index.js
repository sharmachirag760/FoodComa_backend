const express = require('express');
const server = require('./config/ServerConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
// const { uploader } = require('./middlewares/multerMidddleware');
// const cloudinary = require('./config/cloudinaryConfig')
// const fs = require('fs/promises');
const productRouter = require('./routes/productRoute');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL, // allow to server to accept request from different origin 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // allow session cookie from browser to pass through'
}));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/auth',authRouter);
// app.post('/photo',uploader.single('incomingFile'),async (req,res)=>{
//     console.log(req.file)
//     const result = await cloudinary.uploader.upload(req.file.path)
//     console.log("result from cloudinary",result)
//     await fs.unlink(req.file.path)
//      return res.json({
//         message : "ok"
//      })
// })
app.get('/ping',(req,res)=>{
    console.log(req.body)
    console.log(req.cookies);
    return res.json({message: 'pong'})
})
app.listen(server.PORT, async ()=>{
    await connectDB();
    console.log(`Port started at ${server.PORT} !!`)
    // const newUser = await user.create({
    //     firstName : "abc",
    //     lastName : "sharma",
    //     password : "123456",
    //     email : "abcd@gmail.com",
    //     mobileNumber : "1234567892"
    // })
    // console.log("created new user")
    // console.log(newUser)
}) 