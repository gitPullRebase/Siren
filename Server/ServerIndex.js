const express = require("express");
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname + "/../client/dist"));


app.post('/initialLogin', (req, res) => {
  //check if user is an artist
  
  //save user into users database along with cookie 

  //redirect them to appropriate page without login buttons



});


app.listen(port, () => {
  console.log("Listening on port ", port);
});

