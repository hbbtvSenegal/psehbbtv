require.def("psehbb/appui/composants/descritions",
    [
        "psehbb/appui/composants/retour",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/image",
        //~ "psehbb/appui/composants/detail"
        "antie/widgets/textpager"
        
    ],
    function (Retour, Button, Label, Image, TextPager) { 
        return Retour.extend({
		init: function(){
			//~ var arguments=kelk;
			this._super("descriptions");
			var self=this;
			var bou=new Button('bouton');
			bou.appendChildWidget(new Label("clique ici"));
			this.appendChildWidget(bou);
			bou.addEventListener('select',function(evt){
				//~ self.beforeRender(evt);
				console.log('select');
			});
			this.addEventListener('beforeshow',function(evt){
				self.beforeRender(evt);
				console.log('beforeshow');
			});
			this.appendChildWidget(bou);
			this.addEventListener('retour', function(evt){
				self.parentWidget.back();
			});
		},
			beforeRender: function(arguments){
			var left=new Label('left');
			left.addClass('left');
			this._text=new TextPager('textDescriptions');
			this._text.setText(arguments.args.desc);
			this._entete=new Image("entete", arguments.args.img, { width : 200, height: 200});
			this.appendChildWidget(left);
			this.appendChildWidget(this._text);
			this.appendChildWidget(this._entete);
		}
	//~ }
	});
  }
);
