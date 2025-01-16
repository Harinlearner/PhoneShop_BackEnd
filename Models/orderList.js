import mongoose from "mongoose";
const order = mongoose.Schema({
    cUser:{
        type:String,
    },
    rUser:{
        type:String,
    },
    orderName:{
        type:String,
    },
    price:{
        type:Number,
    },
    status:{
        type:Number,
    },
    phone_id:{
        type:String,
    }
});

export default mongoose.model('orders',order);