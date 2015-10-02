require.def("psehbb/appui/format/boutonformat",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button",
        "antie/widgets/image",
    ],
    function(Formatter, Label, Button, Image) {
        return Formatter.extend({
			init:function(comp){
				this.contenaire=comp;
			},
            format : function (iterator) {
                var button, item, self,i;
                item = iterator.next();
                self=this;
                i=1;
                button = new Button("menuDonnees_" + item.id);
				button.appendChildWidget(new Image("img-item.id", item.img, { width : 200, height: 300}));
                button.appendChildWidget(new Label(item.title));
                button.addEventListener('select', function(){
					console.log("select " +i+ " fois" );
					i++;
					self.contenaire.pushComponent("maincontainer", "psehbb/appui/composants/descritions", {img: item.img, id: item.id, desc: item.desc});
				});
                return button;
            }
        });
    }
);
