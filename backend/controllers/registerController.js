var UserModel =require('../models/User');

async function register(req,res){
    try{
        var {username,password,email} = req.body;
        const user = await UserModel.findOne({username:username});

        if(user){
            res.status(400).send({msg:"user doesn't exist",estatus:0});
            throw new Error("User doesn't exist");
        }else{
            const newUser = new UserModel({username,password,email});
            await newUser.save();
            res.status(200).send({msg:"user created succesfully",estatus:1});
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    register
}
