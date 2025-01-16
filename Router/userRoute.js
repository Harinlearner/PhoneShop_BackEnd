import express from "express";
import PhoneSpec from "../Models/PhoneSpec.js";
import order from '../Models/orderList.js';
import userDetails from '../Models/userDetails.js';
const route=express.Router();

route.post('/setDetails',(req,res)=>{
    console.log(req.body);
    const {Model_Name,OS,RAM,Package_Dimensions,Display_technology,Colour,Battery_Power,Item_Weight,display_size,memory_Capacity,price,retailer,no_of_stock,URL} = req.body;
    PhoneSpec.create({Model_Name,OS,RAM,Package_Dimensions,Display_technology,Colour,Battery_Power,Item_Weight,display_size,memory_Capacity,price,retailer,no_of_stock,URL});
});
route.get("/getphone/:retail",(req,res)=>{
    const retail = req.params.retail;
    // console.log(retail);
    PhoneSpec.find({retailer:retail})
    .then((data)=>{res.json(data);})
    .catch((err)=>{res.status(500).json(err)});
});
route.get("/getorder/:retail",(req,res)=>{
    const retail = req.params.retail;
    // console.log(retail);
    order.find({rUser:retail})
    .sort({status:1})
    .then((data)=>{res.json(data);})
    .catch((err)=>{res.status(500).json(err)});
});
route.get("/getorder/cust/:userName",(req,res)=>{
    // console.log("Hello");
    const {userName} = req.params;
    // console.log(userName);
    // console.log(retail);
    order.find({cUser:userName})
    .sort({status:1})
    .then((data)=>{res.json(data);})
    .catch((err)=>{res.status(500).json(err)});
});
route.get("/productdata",(req,res)=>{
    PhoneSpec.find({})
    .then((data)=>{res.json(data)})
    .catch((err)=>res.status(500).json(err));
});
route.post("/orderplacing",(req,res)=>{
    const {user,orderlist} = req.body;
    orderlist.forEach(element => {
        // console.log(element);
        order.create({cUser:user,rUser:element.retail,orderName:element.name,price:element.price,status:0,phone_id:element._id});
    });
});
route.delete('/deletePro/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    try{
    const user = await PhoneSpec.deleteMany({_id:id});
    }
    catch{
        console.log("Error");
    }
});
route.put('/approveOrder/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    await order.findByIdAndUpdate(id,
        {$set:{status:'1'}},
        {new:true}
    );
});
route.put('/updatestock/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    await PhoneSpec.findByIdAndUpdate(id,
        {$inc:{no_of_stock:-1}},
    );
});
route.post('/register',(req,res)=>{
    const {username,password,userType,phone,address} = req.body;
    userDetails.create({userName:username,password:password,Phone:phone,Address:address,type:userType})
    .then((result)=>{res.json(result)})
    .catch((err)=>re.status.json(err));
});
route.post('/login',(req,res)=>{
    const {username,password} = req.body;
        const userDet = userDetails.find({userName:username,password:password})
                        .then((users)=>res.json(users));
        // if(userDet.length==0)
        //     return res.status(401).json({message:"Invalid data"});
        
        // return res.status(200).json(userDet);
});
export default route;