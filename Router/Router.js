const express = require('express')
const router = express.Router();
const todo =require('../Model/shema');


router.get('/get',async (req,res)=>{
    try {
            const Data= await todo.find();
            res.send(Data);
    } 
    catch (error)
     {
        res.send(`Error:${error}`);
    }
})


router.post('/post',async(req,res)=>
{
    const data =new todo({
        task_name:req.body.task_name,
        task_description:req.body.task_description,
        creator:req.body.creator,
        duration:req.body.duration
    })

    try {
         const data1= await data.save()
         res.send(data1);
        
    }
     catch (err)
     {
        res.send(`Error occured ${err}`);
        console.log('Error:'+err)
    }
})

module.exports=router;