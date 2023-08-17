

function logout(req,res){
   // console.log(req);
    //console.log(req.cookies);

    if(req.cookies.cookieToken){
        res.clearCookie('cookieToken');
        //console.log(req.cookies);

        //console.log('pepepepepepepepepeppe');

       // console.log(res);

        res.status(200).send({msg:"ok"});  
    }else{
        res.status(200).send({msg:'there is no cookie token'});
    }



}

module.exports = {
    logout
}