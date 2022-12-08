const friends=require('../model/friends.model.js');
console.log(friends);

function getFriendsJson(req,res){
  res.json(friends);
}

function getFriends(req,res){
  res.render("index",{friends:friends});
}

function getIdFriend(req,res){
  let id=req.params.id;
  if(id>=0 && id<=friends.length){
    res.status(200);
  res.send(friends[id]);
}
else {
  res.status(400).json({
    'err':'no friend found'
  });
}
}

function postFriend(req,res){
  let data=req.body;
  if(!data.id || !data.name){
    res.status(400).json({
      'err':'please enter valid data'
    })
  }
  else{
    const newFriend=data;
    friends.push(newFriend);
    res.status(200).json({
      'success':'added friend'
    })
  }
}

module.exports={
  getFriends,
  getFriendsJson,
  getIdFriend,
  postFriend,
}
