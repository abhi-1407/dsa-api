const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Abhi_mann:L2E4Q7cFPzb0yIvg@dsaclustor.zakf1ny.mongodb.net/DsaDB",{useNewUrlParser:true});

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
