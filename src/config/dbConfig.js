const mongoose = require('mongoose')
const server = require('./ServerConfig')
async function connectDB(){
    try {
        await mongoose.connect(server.DB_URL)
        console.log('Successfully connected to the mongoDB server...!!')
    } catch (error) {
        console.log('DataBase not connected successfully');
        console.log(error)
    }
}
module.exports = connectDB;  