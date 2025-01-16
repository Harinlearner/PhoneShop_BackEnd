import mongoose from "mongoose";
const user = mongoose.Schema({
    userName:{
        type:String,
    },
    password:{
        type:String,
    },
    Phone:{
        type:String,
    },
    Address:{
        type:String,
    },
    type:{
        type:String,
    }
});

export default mongoose.model('users',user);