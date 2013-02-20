var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Story = new Schema({
  title: String,
  description: String,
  completed: Date,
  started: Date,
  id:String
});

var StoryModel = mongoose.model('Story', Story);
module.exports = StoryModel;
