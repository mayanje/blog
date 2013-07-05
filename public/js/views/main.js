define(['backbone','hgn!main'],function(backbone,template){
	return Backbone.View.extend({
		tagName:"section",
		className:"main",
		render: function()
		{
			this.$el.empty().append(template({}));
			return this;
		},
		setPage: function(view){
			this.$(".content .area").empty().append(view.render().el);
		}
	})

});
