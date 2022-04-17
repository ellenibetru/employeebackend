const express=require("express");
const mongoose=require("mongoose");
const employeeRouter=require("./routes/employee")
require("dotenv").config();
const cors =require("cors");

const app =express();
// connecting to our app to our database(Mongodb atlas)
mongoose.connect(process.env.MONGODB_URI).then(()=>{

console.log('databse connection is sucessful')
}) 
.catch((err)=>{

console.log(err)})
app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/api/employees",employeeRouter)
const PORT=3000;
// setting up our server
app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`)
})
