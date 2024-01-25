const ToDo = require("../models/ToDoList");



exports.createToDo = async (req,res)=>{
    try{
        const data = req.body;
        const todo = new ToDo(data); 
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Created New Task !"})

    }catch(err){
        console.log(err);
        res.status(err);
    }
    
}


exports.getAllToDo = async (req,res)=>{
    let {userId} =req.params;
    try{
     const result = await ToDo.find({createdBy:userId});
     res.send(result);


    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}