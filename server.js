require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express()
const PORT = 5000;
const authRoute =  require("./router/auth-router")
const connectDb = require('./db');
const errorMiddleware = require("./middlewares/error-middleware");

// handle cors policy
const corsOptions={
    origin: "http://localhost:3000",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", authRoute)

app.use(errorMiddleware);

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port: ${PORT}`);
    });
})