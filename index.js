const express=require('express');
const friends=require('./model/friends.model.js');

const friendsRouter=require('./routes/friends.router');
const messagesRouter=require('./routes/messages.router');

const app=express();
const PORT=3000;

app.set('view engine','ejs');

app.use(express.json());
app.get("/",function(req,res){
  res.json(friends);
});


app.use("/friends",friendsRouter);


app.use("/messages",messagesRouter);

app.listen(PORT,()=>{
  console.log("Server started on PORT 3000");
});
