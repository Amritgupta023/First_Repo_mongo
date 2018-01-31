var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Try');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('success...');
});

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    age: String
});

var AuthorA=mongoose.model('AuthorA',SomeModelSchema);
module.exports=AuthorA;