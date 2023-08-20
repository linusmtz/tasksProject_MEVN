var jwt = require('jsonwebtoken');


function validToken(req,res,next){
    try{

        let token = req.cookies.cookieToken;

        if(!token){
            throw new Error('There is no token in headers');
        }


        const payload = jwt.verify(token,process.env.JWT_REFRESH);
        console.log(payload);

        
        next();
    }catch(error){
        console.log(error);
        return res.status(400).send({msg:"Something went wrong with token",estatus:0})
    }
}

module.exports = {
    validToken
}