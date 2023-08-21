var UserModel = require('../../models/User');


async function createTask(req,res){
    try{
        //get info from request
        const {username,title,content,status} = req.body;
        console.log(req.body);

        //push task into user's taks 
        const result = await UserModel.updateOne({username:username},{$push:{tasks:{title,content,status}}});

        console.log(result);
        //if we get the validation
        if(result.modifiedCount){
            res.status(200).send({msg:"task created succesfully",estatus:1,data:result});
        }else{
            throw new Error('cannot create task')           
        }
    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0,data:{}});
    }

}

module.exports = {
    createTask
}