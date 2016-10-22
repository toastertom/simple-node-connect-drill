var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    console.log("getChats")
    res.send(chats);
  },
  postChats:function(req,res){
    console.log("postchats")
    // TODO write postChats
    chats.push(req.body)
      res.status(200).send(chats);
  },
  deleteChats:function(req,res){
    // TODO write deleteChats
    chats  = [];
    res.status(200).send('Successfully Deleted');
}
}
