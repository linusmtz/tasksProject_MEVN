var UserModel =require('../models/User');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');


async function login(req,res){
    try{
        var {username,password} = req.body;
        let user = await UserModel.findOne({username:username});

        if(!user){
            res.status(400).send({msg:"user not found",estatus:0});
            throw new Eror('User not registered')
        }else{
            const result = await bcryptjs.compare(password,user.password);
            
            if(!result){
                res.status(400).send({msg:"Wrong password",estatus:0});
                throw new Error('Wrong password')
            }else{
                res.status(200).send({msg:"Logged in",estatus:1});
            }
        }
    }catch(error){
        console.log(error);
    }
}

module.exports= {
    login
}