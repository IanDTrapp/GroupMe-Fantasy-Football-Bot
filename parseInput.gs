var botId = "YOUR_BOT_ID_HERE";
function sendInfo(text) {
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}
//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's (to be) URL is called
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name
  
  text.trim();

  // Returns current scores
  if(text.toLowerCase() == "!scores"){
    getScores();
  }
  
  // Returns matchups for the week
  else if(text.toLowerCase() == "!matchups"){
    getMatchups();
  }
}
