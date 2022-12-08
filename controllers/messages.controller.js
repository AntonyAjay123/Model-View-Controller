const friends=require('../model/friends.model.js')

function getMessages(req,res){
  res.render("messages",{friends:friends})
}

function postMessages(req,res){
  let data=req.body;
  console.log(data);
  if(!data.id || !data.name || !data.messages){
    res.status(400).json({
      'err':'enter valid data'
    })
  }
  else{
    if(friends[data.id]){
      res.status(400).send("Success");
      friends[data.id].messages.push(data.messages);
    }
    else {res.status(400).send("Success");
      friends.push(data);
    }
  }
}

module.exports={
  getMessages,
  postMessages,
}
