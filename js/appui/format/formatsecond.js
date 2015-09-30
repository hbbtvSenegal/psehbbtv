 require.def("psehbb/appui/format/formatsecond",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button", 
        "antie/datasource",
        "psehbb/appui/data/bouton"
    ],
    function(Formatter, Label, Button, DataSource, Bouton) {
        return Formatter.extend({
			
			init:function(comp, secondComposant){
				this._secondaire=secondComposant;
				this.comp=comp;
			},
			
            format : function (iterator) {
                var button, item;
                var self=this;
                item = iterator.next();
                button = new Button("menusecondaire_" + item.id);
                button.appendChildWidget(new Label(item.title));
                button.addEventListener('focus', function(){
					self._secondaire.setDataSource(new DataSource(self.comp, new Bouton(), "loadData"));
				});
                return button;
            }
        });
    }
);

