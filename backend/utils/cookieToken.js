var jwt = require('jsonwebtoken');

function refreshCookieToken(payload,res){
    const expiresIn = 60*60*3; //3 hours
    try{
        
        //we sign the token with id and username of user

        const cookieRefresh = jwt.sign({id:payload.id,username:payload.username},process.env.JWT_REFRESH,{expiresIn});
        res.cookie("cookieToken",cookieRefresh,{
            httpOnly:true,
         //   secure:!(process.env.MODE ==="developer"),
            expires:new Date(Date.now()+expiresIn*1000)
        });
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    refreshCookieToken
}