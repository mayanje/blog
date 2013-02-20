define(['jquery','underscore','backbone','hgn!editor/blog','models/entry','showdown'],function($,_,backbone,template,EntryModel,Showdown){
	return Backbone.View.extend({
		tagName:"section",
		className:"stories",
		initialize:function()
		{
			this.model = new EntryModel();
		},
		render: function()
		{
			this.$el.empty().append(template(this.model.toJSON()));
			this.content = this.$('.content');
			this.textbox = this.$('textarea.entry');
			this.title = this.$('.title');
			this.update();
			return this;
		},
		events:{
			"change textarea.entry": "update",
			"keyup textarea.entry": "update",
			"change .title": "updateTitle",
			"keyup .title": "updateTitle",
			"keyup": "keyup",
			"keydown": "keydown",
			"click .save":"saveClick",
		},
		update:function(){
			var converter = new Showdown.converter();
			var html = converter.makeHtml(this.textbox.val());

			this.content.html(html);
			this.model.set("content",this.textbox.val());
		},
		updateTitle:function(){
			this.model.set("title",this.title.text());
		},
		keyup: function(e){
			if(e.which == 17) this.isCtrl = false;
		},
		keydown: function(e){
			if(e.which == 17) this.isCtrl = true;
			if(e.which == 83 && this.isCtrl == true) {
				//run code for CTRL+S -- ie, save!
				this.save();
				e.preventDefault();
				return false;
			}
		},
		saveClick:function(e){
			this.save();
			e.preventDefault();
			return false;
		},
		save:function(){
			$.ajaxSetup({beforeSend: function(jqXHR){
		        jqXHR.setRequestHeader("api_key", "devkey");
		    }});
			this.model.save();
		}
	})

});
