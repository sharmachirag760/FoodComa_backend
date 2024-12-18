const express = require('express');
const server = require('./config/ServerConfig')
const connectDB = require('./config/dbConfig')
const user = require('./schema/userSchema');
const { cartRouter } = require('./routes/cartRoute');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const { isLoggedIn } = require('./validation/authValidator');
const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/users',userRouter);
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.get('/ping',isLoggedIn,(req,res)=>{
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