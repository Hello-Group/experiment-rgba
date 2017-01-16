var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || '3000', '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting");
});
