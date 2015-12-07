'use strict';

var express = require("express"),
              app = express(),
             port = 3001,
         voting  = require(__dirname + '/app/voting.js');
             
app.set('port', process.env.PORT || port);
// set up handlebars view engine
var handlebars = require('express3-handlebars')
     .create( { defaultLayout: 'main' } );
app.engine( 'handlebars', handlebars.engine );
app.set( 'view engine', 'handlebars' );
           
// Log Date every time request is made
app.use(function (req, res, next) {
 var date = new Date();
 if(date) {
   console.log('Time: %d%d%d',  date.getHours(), date.getMinutes(), date.getSeconds()  );
 } 
 next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", function( req, res ) {
   res.render('home', { name : "Voting" });
});

app.get("/about", function( req, res ) {
 console.log(voting);
   var randomFortune = voting[Math.floor(Math.random() * voting.length)];
   res.render("about", { fortune: randomFortune })
});

// custom 404 page
app.use( function( req, res ) {
  res.status( 404 );
  res.render("404")
});

// custom 500 page
app.use( function(err, req, res, next ){
  console.error( err.stack );
  res.status(500);
  res.render("500");
});



app.listen( app.get('port'), function() {
  console.log( "Express started on http://localhost: " + app.get( "port" ) + "; Press Ctrl-C to terminate." );
});