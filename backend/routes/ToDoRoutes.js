const {createToDo, getAllToDo } = require("../controllers/toDoController");
const express = require('express');
const authenticateToken = require("../middleware/authJwt");
const router = express.Router();

router.post('/create-to-do',authenticateToken,createToDo);
router.get('/get-all/:userId',authenticateToken,getAllToDo);


 

module.exports = router; 