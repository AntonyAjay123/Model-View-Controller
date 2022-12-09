const friends=require('../model/friends.model.js');
const Friend=require('../model/friendMongo.model.js');
console.log(friends);

function getFriendsJson(req,res){
  res.json(friends);
}

function getFriends(req,res){
  Friend.find({},function(err,data){
    if(err){
      res.status(400).json({
        'err':err
      });
    }
    else{
      res.render("index",{friends:data});
    }
  })
}

function getIdFriend(req,res){
  let id=req.params.id;
  if(id>=0 && id<=friends.length){
    res.status(200);
    Friend.find({id:id},function(err,data){
      if(err){
        res.status(400).json({
          'err':err
        });
      }
      else{
        res.send(data);
      }
    })
  }
  //res.send(frie);
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
    const newFriend=new Friend(data);
    //friends.push(newFriend);
    newFriend.save(function(err){
      if(err)res.json({'err':err});
      else res.status(200).json({
        'success':'added friend'
      })
    })
  }
}

module.exports={
  getFriends,
  getFriendsJson,
  getIdFriend,
  postFriend,
}
