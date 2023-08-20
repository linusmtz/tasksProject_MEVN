

function logout(req,res){
    try {
        if(req.cookies.cookieToken){
            res.clearCookie('cookieToken');
            res.status(200).send({msg:"ok"});      
        }else{
            throw new Error('No cookie')
        }
    } catch (error) {
        console.log(error);
        
        if(error==='No cookie'){
            res.status(200).send({msg:"There is no cookieToken"});
        }else{
            res.status(500).send({msg:"Internal server error"});
        }
    }

}

module.exports = {
    logout
}