const express = require("express");
const APP = express();
const cors = require("cors");
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB connected successfully!");
}).catch(err=>{
    console.log(err);
})

APP.use(cors());

APP.use(cors(
    {
        origin:"https://premier-tache-stage-idtt.vercel.app"
    }
));
APP.use(express.json()); 

APP.use('/api',authRoutes);
APP.use('/api/todo',toDoRoutes);




APP.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`);

});