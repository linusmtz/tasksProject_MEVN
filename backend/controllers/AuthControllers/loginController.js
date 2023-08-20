var UserModel =require('../../models/User');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');
const {refreshCookieToken} = require('../../utils/cookieToken');

async function login(req,res){
    try{
        // get username and password from request
        var {username,password} = req.body;

        //check if user exists
        let user = await UserModel.findOne({username:username});

        //user does not exist
        if(!user){
            throw new Error('User not registered')
        }else{ //user exists

            //we compare req.password and real password from the user -- true/false
            const result = await bcryptjs.compare(password,user.password);

            //it's not the same password
            if(!result){
                throw new Error('Wrong password')
            }else{
                
                //we store cookie token 
                refreshCookieToken(user.id,res);

                //response
                //modify the data that is sent in response
                res.status(200).send({msg:"Logged in",estatus:1,data:user});

            }
        }
    }catch(error){
        console.log(error);
        if(error==='Wrong password' || error ==='User not registered'){
            res.status(400).send({msg:"Authenticacion failed",estatus:0,data:{}});
        }else{
            res.status(500).send({msg:"Internal server error",estatus:0,data:{}});
        }
    }
}

module.exports= {
    login
}