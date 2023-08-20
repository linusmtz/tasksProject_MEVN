const UserModel = require('../../models/User');


async function getAllUserTasks(req,res){
    try{
        const user = await UserModel.findOne({username:req.body.username})
        console.log(user);


        if(!user){
            res.status(400).send({msg:"error at finding user",estatus:0});
        }
        res.status(200).send({tasks:user.tasks,estatus:1});
    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0});
    }
}

async function getUserByTitle(req,res){
    try{
        //check if user exists
        const user = await UserModel.findOne({username:req.body.username})
        if(!user){
            res.status(400).send({msg:"user doesn't exist",estatus:0});
        }
        //if user has one task with unique title
        //const task = user.tasks.find(task=>task.title===req.body.task);


        //user has two or more tasks with same title
        const tasksSameTitle = user.tasks.filter(task=>task.title==req.body.task);
        console.log(tasksSameTitle);

        if(tasksSameTitle.length){
            res.status(200).send({msg:"ok",data:tasksSameTitle,estatus:1});
        }else{
            res.status(400).send({msg:"there is no task named like that",data:{},estatus:0});
        }

       // console.log(task);
        
        
      //console.log(user);


        
    }catch (error) {
        console.log(error);
    }


}
module.exports = {
    getAllUserTasks,
    getUserByTitle
}