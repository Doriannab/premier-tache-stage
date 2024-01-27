const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
const APP = express();
const cors = require("cors");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
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

APP.use(cors(
    {
       origin: "https://premier-tache-stage-idtt.vercel.app"
    }
));
APP.use(express.json()); 
APP.use(express.urlencoded({extended: false}));
APP.use('api/uploads', express.static('upload'));
APP.use(upload.single('image'))

APP.use('/api',authRoutes);
APP.use('/api/todo',toDoRoutes,);



APP.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`);

});