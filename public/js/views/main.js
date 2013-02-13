define(['backbone','hgn!main'],function(backbone,template){

	var TO_RADIANS = Math.PI/180; 
	return Backbone.View.extend({
		tagName:"section",
		className:"main",
		render: function()
		{
			this.$el.empty().append(template({}));
			return this;
		},
		initializeContext: function(){
		}
	})

});
