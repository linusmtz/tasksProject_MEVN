var UserModel = require('../../models/User');



async function editTask(req,res){
    try{
        const {title,content,status,username} = req.body;
        
        const user = await UserModel.findOne({username});
        console.log(user);

        const taskid = req.body.taskid;

        user.tasks.find(task=>{
            if(task._id.toString()===taskid){
                task.title = title;
                task.content = content;
                task.status = status;    
                console.log(task + 'XD');
            }
        });
        await user.save();
        //console.log(taskid);
        res.status(200).send({msg:"data changed succesfully",estatus:1,data:user});

    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0});            
    }
}

module.exports = {
    editTask
}