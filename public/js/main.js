require(['config/config'],function(){
	require(['jquery',"views/main"],function($,MainView){
		var main = new MainView();
		$('body').append(main.render().el);
		main.initializeContext();
	});
})