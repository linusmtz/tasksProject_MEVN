var UserModel =require('../models/User');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');


async function login(req,res){
    try{
        var {email,password} = req.body;
        let user = UserModel.findOne({email:email});


        if(!user){
            res.status(400).send({msg:"user not found",status:400});
            throw new Eror('User not registered')
        }else{
            
        }


    }catch(error){
        console.log(error);

    }




}
