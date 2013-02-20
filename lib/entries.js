var EntryModel = require('./entry.js');
var restify = require('restify');

module.exports = {
	latest: function(req, res, next){

		EntryModel.findOne({posted:{$exists:true}}).sort({posted:-1}).exec(function(err, entry) {
			if(err)
				next(new restify.InternalError("Failed to find entry"))
			else
				next(entry);
		});
	},
	released: function(req, res, next){
		EntryModel.find({posted:{$exists:true}}).sort({posted:-1}).exec(function(err, entries) {
			if(err)
				next(new restify.InternalError("Failed to find entries"))
			else
				next(entries);
		});
	},
	nonreleased: function(req, res, next){
		EntryModel.find({}).sort({posted:-1}).exec(function(err, entries) {
			if(err)
				next(new restify.InternalError("Failed to find entries"))
			else
				next(entries);
		});
	},
	get: function(req, res, next){
		EntryModel.findOne({posted:{$exists:true},id:{$eq:req.params.id}}).exec(function(err, entry) {
			if(err)
				next(new restify.InternalError("Failed to find entry"))
			else
				next(entry);
		});
	},
	add: function(req, res, next){
		var record = new EntryModel(req.body);
		record.save(function (err,record) {
			if(err)
				next(new restify.InternalError("Failed to add entry"))
			else
				next(record);
		});
	},
	update: function(req, res, next){
		EntryModel.findOneAndUpdate({id:{$eq:req.params.id}},res.body, function(err, entry) {
			if(err)
				next(new restify.InternalError("Failed to update entry"))
			else
				next(entry);
		});
	},
	remove: function(req, res, next){
		EntryModel.remove({id:{$eq:req.params.id}}, function(err) {
			if(err)
				next(new restify.InternalError("Failed to remove entry"))
			else
				next();
		});
	}
}
