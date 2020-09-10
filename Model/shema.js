const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    createdAt: { type: Date,default: Date.now },
    task_name:{type:String,requried:true},
    task_description:{type:String,requried:true},
    creator:{type:String,requried:true},
    duration:{type:Number,require:true},
})
   schema.index({"createdAt": 1 },{ expireAfterSeconds:'30m'});
   

module.exports=mongoose.model('todo_records',schema);