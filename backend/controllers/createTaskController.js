var UserModel = require('../models/User');


async function createTask(req,res){
    try{
        const {username,title,content,status} = req.body;
        console.log(req.body);
        const result = await UserModel.updateOne({username:username},{$push:{tasks:{title,content,status}}});

        console.log(result);
        if(result.modifiedCount){
            res.status(200).send({msg:"task created succesfully",estatus:1,data:result});
        }else{
            res.status(400).send({msg:"error",estatus:0});            
        }



    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0});

    }

}

module.exports = {
    createTask
}