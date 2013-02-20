define(['backbone'],function(backbone,template){
	return Backbone.Model.extend({
		idAttribute:"id",
		urlRoot:"/blog"
	})

});
