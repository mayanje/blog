define(['backbone','models/entry'],function(backbone,EntryModel){
	return Backbone.Collections.extend({
		model:EntryModel
		rootUrl:"/blog"
	})

});
