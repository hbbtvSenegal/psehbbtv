require.def("psehbb/appui/format/boutonformat",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button"
    ],
    function(Formatter, Label, Button) {
        return Formatter.extend({
			
			init:function(composant, secondComposant){
				this._principal=composant;
				this._secondaire=secondComposant;
			},
			
            format : function (iterator) {
                var button, item;
                var self=this;
                item = iterator.next();
                button = new Button("menuprincipal_" + item.id);
                button.appendChildWidget(new Label(item.title));
                button.addEventListener('focus', function(){
						self._secondaire=new HorizontalCarousel('secondMenu', new boutonSecond());
					});
                return button;
            }
        });
    }
);
