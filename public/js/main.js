require(['config/config'],function(){
	require(['jquery',"views/main",'views/blog','views/stories','views/editor/blog'],function($,MainView,BlogView,StoriesView,BlogEditorView){
		var main = new MainView();
		$('body').append(main.render().el);
		var Router = Backbone.Router.extend({

		  routes: {
		    "story": "stories",
		    "story/:title": "stories",
		    "new": "blogEditor",
		    ":title": "blog",
		    "": "blog"
		  },

		  blog: function(id) {
		  	main.setPage(new BlogView(id));
		  },
		  blogEditor: function() {
		  	main.setPage(new BlogEditorView());
		  },
		  stories: function(id) {
		    main.setPage(new StoriesView(id));
		  }

		});
		var router = new Router();
		Backbone.history.start({pushState: true})
	});
})