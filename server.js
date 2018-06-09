//Dependencies.//
const express=require("express");
const bodyParser=require("body-parser");
const app=express();

const apiRoutes=require('./routes/api-routes.js');
const htmlRoutes=require('./routes/html-routes.js');
const db=require("./models");

const env = require('dotenv');
const PORT=process.env.PORT || 8080;
//Express app setup to handle data parsing.//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//Static directory being served.//
app.use(express.static("public"));
//HTML routing serving different HTML files.//
app.use(apiRoutes);
app.use(htmlRoutes);

//Starts the server listening.//
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
  });
});