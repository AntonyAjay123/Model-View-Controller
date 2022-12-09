const express=require('express');
const mongoose=require('mongoose');
const friends=require('./model/friends.model.js');
const Friend=require('./model/friendMongo.model.js');

const friendsRouter=require('./routes/friends.router');
const messagesRouter=require('./routes/messages.router');


const app=express();
const PORT=3000;

app.set('view engine','ejs');

app.use(express.json());
app.get("/",function(req,res){
  Friend.find({},function(err,data){
    if(err){
      res.status(400).json({
        'err':err
      });
    }
    else{
      res.send(data);
    }
  });
});


app.use("/friends",friendsRouter);


app.use("/messages",messagesRouter);

app.listen(PORT,()=>{
  console.log("Server started on PORT 3000");
});
