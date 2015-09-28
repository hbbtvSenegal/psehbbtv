require.def("psehbb/appui/format/format",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button", 
        "antie/datasource",
        "psehbb/appui/data/boutonsource"
    ],
    function(Formatter, Label, Button, DataSource, BoutonSource) {
        return Formatter.extend({
			
			init:function(comp, secondComposant){
				this._secondaire=secondComposant;
				this.comp=comp;
			},
			
            format : function (iterator) {
                var button, item;
                var self=this;
                item = iterator.next();
                button = new Button("menuprincipal_" + item.id);
                button.appendChildWidget(new Label(item.title));
                button.addEventListener('focus', function(){
					self._secondaire.setDataSource(new DataSource(self.comp, new BoutonSource(), item.src));
				});
                return button;
            }
        });
    }
);
