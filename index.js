var express=require('express');
var app=express();

var AuthorA=require('./author');

app.listen(3003);
console.log("Server is listing...");

var abc=new AuthorA({
	name:'amrit',
	age:'22'
	});

// Save the new model instance, passing a callback
abc.save(function (err) {
  if (err) return handleError(err);
  // saved!
})