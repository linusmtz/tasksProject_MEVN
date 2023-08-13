var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})


const userSchema = new mongoose.Schema({
    username:{
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
    },
    email:{
        type:String,
        required:true,
        trim:true,  
        unique:true,   
        lowercase:true
    },
    tasks:Array
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
        throw new Error('Error')
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;