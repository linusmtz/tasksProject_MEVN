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

async function getUserByTitle(req,res){
    try{
        //check if user exists
        const user = await UserModel.findOne({username:req.body.username,})
        if(!user){
            res.status(400).send({msg:"user doesn't exist",estatus:0});
        }
        
        
        res.status(200).send({msg:"ok",data:user,estatus:1});
        console.log(user);


        
    }catch (error) {
        console.log(error);
    }


}
module.exports = {
    getAllUserTasks,
    getUserByTitle
}