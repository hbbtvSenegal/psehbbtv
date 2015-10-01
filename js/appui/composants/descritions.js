require.def("psehbb/appui/components/descriptions",
    [
        "antie/widgets/component",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/image",
        "antie/widgets/textpager"
        
    ],
    function (Component, Button, Label, Image, TextPager) { 
        return Component.extend({
		init: function(){
			this._super("descriptions");
			var self=this;
			this.addEventlistener('beforerender',function(evt){
				self.beforeRender(evt);
			});},
			
			beforeRender: function(evt){
			var left=new Label('left');
			left.addClass('left');
			this._text=new Textpage('textDescriptions');
			this._text.setText(evt.desc);
			this._entete=new Image("entete", evt.img, { width : 200, height: 200});
			this.appendChildWidget(left);
			this.appendChildWidget(this._text);
			this.appendChildWidget(this._entete);
	}
	});
  }
);
