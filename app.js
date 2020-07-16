var express = require("express");

var app = express()

app.get("/", function(req, res){
    res.send("Hi, there");
});

app.listen(8080, "localhost", function(){
    console.log("Server is running");
}
);