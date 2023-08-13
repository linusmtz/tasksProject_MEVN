var UserModel =require('../models/User');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');
const {refreshCookieToken} = require('../utils/cookieToken');

async function login(req,res){
    try{
        // get username and password from request
        var {username,password} = req.body;

        //check if user exists
        let user = await UserModel.findOne({username:username});

        //user does not exist
        if(!user){
            res.status(400).send({msg:"user not found",estatus:0});
            throw new Eror('User not registered')
        
        }else{ //user exists

        
            //we compare req.password and real password from the user -- true/false
            const result = await bcryptjs.compare(password,user.password);

            //it's not the same password
            if(!result){
                res.status(400).send({msg:"Wrong password",estatus:0});
                throw new Error('Wrong password')
            }else{
                
                //we store cookie token 
                refreshCookieToken(user.id,res);

                //response
                res.status(200).send({msg:"Logged in",estatus:1,data:user});

            }
        }
    }catch(error){
        console.log(error);
        res.status(400).send({msg:"error",estatus:0});
    }
}

module.exports= {
    login
}