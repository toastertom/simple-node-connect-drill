angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http.get('api/chats').then(function(response) {
      console.log("this is response", response)
      return response.data
    })

  }

  this.addChats = function(newChat){
    //TODO Call server to add to chats
    // $http.post('api/chats', newChat, function () {
    //   return resopnse;
    //   console.log('add chats is running');
    // });
    return $http({
      url: 'api/chats',
      method: 'POST',
      data: newChat
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats

  }
});
