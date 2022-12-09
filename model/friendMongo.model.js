const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/friendDB",{useNewUrlParser:true});
const friendSchema=mongoose.Schema({
  id:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true,
  },
  messages:{
    type:[]
  }
});

const Friend=mongoose.model("Friend",friendSchema);

module.exports=Friend;
