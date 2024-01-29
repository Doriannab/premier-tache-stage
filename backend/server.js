const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
const APP = express();
const cors = require("cors");
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, path.join(__dirname, 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +'-' + file.originalname)
    }
  });
  const upload = multer({ storage: storage })
  
 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB connected successfully!");
}).catch(err=>{
    console.log(err);
})

APP.use(cors());


APP.use(express.json()); 
APP.use(express.urlencoded({extended: false}));
APP.use('api/uploads', express.static('uploads'));
APP.use(upload.single('image'));

APP.use('/api',authRoutes);
APP.use('/api/todo',toDoRoutes,);



APP.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`);

});