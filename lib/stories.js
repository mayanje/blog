var StoryModel = require('./story.js');
var restify = require('restify');
module.exports = {
	wip: function(req, res, next){
		StoryModel.findOne({started:{$exists:true},completed:{$exists:false}}, function(err, user) {
			if(err)
				next(new restify.InternalError("Failed to find stories"))
			else
				next(user);
		});
	},
	completed: function(req, res, next){
		StoryModel.find({completed:{$exists:true}}, function(err, users) {
			if(err)
				next(new restify.InternalError("Failed to find stories"))
			else
				next(users);
		});
	},
	get: function(req, res, next){
		StoryModel.findOne({id:{$eq:req.params.id}}, function(err, user) {
			if(err)
				next(new restify.InternalError("Failed to get story"))
			else
				next(user);
		});
	},
	add: function(req, res, next){
		var record = new StoryModel(req.body);
		record.save(function (err,record) {
			if(err)
				next(new restify.InternalError("Failed to add story"))
			else
				next(record);
		});
	},
	update: function(req, res, next){
		StoryModel.findOneAndUpdate({id:{$eq:req.params.id}},res.body, function(err, story) {
			if(err)
				next(new restify.InternalError("Failed to update story"))
			else
				next(story);
		});
	},
	remove: function(req, res, next){
		StoryModel.remove({id:{$eq:req.params.id}}, function(err) {
			if(err)
				next(new restify.InternalError("Failed to remove story"))
			else
				next();
		});
	}
}
		  
