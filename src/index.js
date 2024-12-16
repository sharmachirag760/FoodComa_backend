const express = require('express');
const server = require('./config/ServerConfig')
const connectDB = require('./config/dbConfig')
const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.post('/ping',(req,res)=>{
    console.log(req.body)
    return res.json({message: 'pong'})
})
app.listen(server.PORT, async ()=>{
    await connectDB();
    console.log(`Port started at ${server.PORT} !!`)
}) 