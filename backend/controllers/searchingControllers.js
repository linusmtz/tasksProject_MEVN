const UserModel = require('../models/User');


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

module.exports = {
    getAllUserTasks,
}