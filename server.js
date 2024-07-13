const express=require('express');
const cors=require('cors');
const colors=require('colors');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDb=require("./config/connectDB");
const path=require('path');

dotenv.config();

connectDb()

const app=express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require('./routes/userRoute'))

app.use("/api/v1/transactions", require('./routes/transactionRoutes'));

app.get("/", (req,res)=>{
    res.send("hello 6");
})

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

const PORT=process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

