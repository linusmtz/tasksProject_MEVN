var UserModel =require('../models/User');

async function register(req,res){
    try{
        //get data from request
        var {username,password,email} = req.body;

        //check if user exists
        const user = await UserModel.findOne({username:username});

        if(user){
            res.status(400).send({msg:"user already exists",estatus:0});
        }else{
            //we create an object with data from request
            const newUser = new UserModel({username,password,email});

            //save object in database
            await newUser.save();
            
            //response
            res.status(200).send({msg:"user created succesfully",estatus:1,data:{}});
        }
    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0});
    }
}

module.exports = {
    register
}
