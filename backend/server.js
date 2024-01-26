const express = require("express");
const APP = express();
const cors = require("cors");
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');

const PORT = process.env.PORT || 5000;

APP.use(cors());
APP.use(express.json()); 

APP.use('/api',authRoutes);
APP.use('/api/todo',toDoRoutes);

  



mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB connected successfully!");
}).catch(err=>{
    console.log(err);
})


APP.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`);

});