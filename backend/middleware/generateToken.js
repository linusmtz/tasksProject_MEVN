var jwt = require('jsonwebtoken');


function validToken(req,res,next){
    try{
        let token = req.cookies.cookieToken;

        if(!token){
            throw new Error('there is no token in headers');
        }

        console.log(token);

        const payload = jwt.verify(token,process.env.JWT_REFRESH);
        
        console.log(payload);
        req.userid = payload.userid;
        next();
    }catch(error){
        console.log(error);
        return res.status(400).send({msg:"something went wrong with token",estatus:0})
    }



}

module.exports = {
    validToken
}