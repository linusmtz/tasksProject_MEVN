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
        console.log(req.body.task);
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

//get sorted tasks a-z by title
async function getSortedTasks(req,res){
    
    try{

        const {username} = req.body;

    
        const user = await UserModel.findOne({username});
    
        const orderedTasks = user.tasks.sort((a,b)=>a.title.localeCompare(b.title));
    
        res.status(200).send({msg:"ok",estatus:1,data:orderedTasks});


    }catch(error){
        res.status(400).send({msg:"ok",estatus:0,data:{}})
    }
    
}

async function getTasksByStatus(req,res){

    try {
        const {username,status} = req.body;
        const user = await UserModel.findOne({username});
    
        
        const tasks = user.tasks.filter((task)=>task.status===status);
    
        res.status(200).send({msg:"ok",estatus:1,data:tasks});    
        
    } catch (error) {
        res.status(400).send({msg:"ok",estatus:0,data:{}})   
    }


}



module.exports = {
    getAllUserTasks,
    getUserByTitle,
    getSortedTasks,
    getTasksByStatus
}