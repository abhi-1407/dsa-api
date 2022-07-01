const express=require('express');
const app=express();
const mongoose=require('mongoose');

const cors=require('cors');
require('dotenv').config();
let apiKey=process.env.API_KEY;
mongoose.connect("mongodb+srv://"+apiKey+"@dsaclustor.zakf1ny.mongodb.net/DsaDB",{useNewUrlParser:true});
app.use(cors({
    origin: "*",
}));
let api_key=process.env.API_KEY;
const DsaSchema=new mongoose.Schema({
    topic:String,
    links:{
        ques:String,
        link:String
    }
})

const DsaModel=mongoose.model('questions',DsaSchema);

app.get('/',function(req,res){
    DsaModel.find({},function(err,data){
    if(!err)
    res.send(data);
    else
    res.send(err);
    });
})

app.get('/:temp',function(req,res){
    DsaModel.findOne({topic:req.params.temp},function(err,data){
    if(!err)
    res.send(data);
    else
    res.send(err);
    });
})
app.listen(process.env.PORT||3000,function()
{
    console.log('Listening on port 3000');
})
