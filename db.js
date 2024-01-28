// const MongoClient = require('mongodb').MongoClient
// const dotenv = require('dotenv')
// dotenv.config()


// const url = process.env.URL

// MongoClient.connect(url, (err, client)=>{
//     if(err) throw err

//     console.log("db connected...")
//     module.exports = client

//     const app = require('./app')
//     app.listen(process.env.PORT, ()=>{
//         console.log("server listening on 8000...")
//     })
// })

const mongoose = require("mongoose")

// const URI = 'mongodb://localhost:27017/mern_admin'

const URI = process.env.MONGODB_URI;

const  connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    }catch(error){
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;