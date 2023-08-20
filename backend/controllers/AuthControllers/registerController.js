var UserModel =require('../../models/User');

async function register(req,res){
    try{
        //get data from request
        var {username,password,email,tasks} = req.body;

        //check if user exists
        const user = await UserModel.findOne({username:username});

        if(user){
            throw new Error('User already exists');
        }else{
            
            //we create an object with data from request
            const newUser = new UserModel({role:'user',username,password,email,tasks});

            //save object in database
            await newUser.save();
            
            //response
            console.log(newUser)
            
            //modify the data that is sent in response
            res.status(200).send({msg:"user created succesfully",estatus:1,data:user});
        }
    }catch(error){
        console.log(error);
        if(error==='User already exists'){
            res.status(400).send({msg:"Registration failed",estatus:0,data:{}});
        }else{
            res.status(500).send({msg:"Internal server error",estatus:0,data:{}});
        }
    }
}

module.exports = {
    register
}
