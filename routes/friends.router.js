const express=require('express');

const friendsController= require('../controllers/friends.controller.js');

const friendsRouter=express.Router();

friendsRouter.get("/",friendsController.getFriends);
friendsRouter.get("/:id",friendsController.getIdFriend);
friendsRouter.post("/",friendsController.postFriend);

module.exports=friendsRouter;
