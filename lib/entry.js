var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Entry = new Schema({
  title: String,
  content: String,
  posted: Date,
  author:String,
  id:String
});

var EntryModel = mongoose.model('Entry', Entry);
module.exports = EntryModel;
