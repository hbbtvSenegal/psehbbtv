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
				this.comp=comp;
			},
            format : function (iterator) {
                var button, item, self;
                item = iterator.next();
                self=this;
                button = new Button("menuDonnees_" + item.id);
				button.appendChildWidget(new Image("img-item.id", item.img, { width : 200, height: 300}));
                button.appendChildWidget(new Label(item.title));
                button.addEventListener('select', function(ev) {
					self.comp.pushComponent("maincontenaire", "psehbb/appui/composants/descritions", {img: item.img, id: item.id, desc:item.desc});
					
				});
                return button;
            }
        });
    }
);
