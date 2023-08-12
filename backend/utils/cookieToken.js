var jwt = require('jsonwebtoken');

function refreshCookieToken(uid,res){
    const expiresIn = 60*60*3; //3 hours
    try{
        const cookieRefresh = jwt.sign({uid},process.env.JWT_SECRET,{expiresIn});
        res.cookie("cookieToken",cookieRefresh,{
            httpOnly:true,
            secure:!(process.env.MODE ==="developer"),
            expires:new Date(Date.now()+expiresIn*1000)
        });
    }catch(error){
        console.log(error);
    }

}

module.exports = {
    refreshCookieToken
}