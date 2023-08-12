var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

userSchema.pre("save",async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    try{
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password,salt);
    
        next();
    }catch(err){
        console.log(err);
        throw new Error('fallo el hash de contrasena')
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;