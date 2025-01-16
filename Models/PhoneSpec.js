import mongoose from "mongoose";

const user = mongoose.Schema({
    Model_Name:{
        type:String,
    },
    OS:{
        type:String,
    },
    RAM:{
        type:String,
    },
    Package_Dimensions:{
        type:String,
    },
    Display_technology:{
        type:String,
    },
    Colour:{
        type:String,
    },
    Battery_Power:{
        type:String,
    },
    Item_Weight:{
        type:String,
    },
    display_size:{
        type:String,
    },
    memory_Capacity:{
        type:String,
    },
    price:{
        type:Number,
    },
    retailer:{
        type:String,
    },
    no_of_stock:{
        type:Number,
    },
    URL:{
        type:String,
    }
});

export default mongoose.model('phones',user);