define(['backbone','hgn!blog'],function(backbone,template){
	return Backbone.View.extend({
		tagName:"section",
		className:"blog",
		initialize:function(id)
		{

		},
		render: function()
		{
			this.$el.empty().append(template({title:"first blog post",content:"first blog content"}));
			return this;
		}
	})

});
