define(['backbone','hgn!stories'],function(backbone,template){
	return Backbone.View.extend({
		tagName:"section",
		className:"stories",
		render: function()
		{
			this.$el.empty().append(template({}));
			return this;
		}
	})

});
