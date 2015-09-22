require.def("psehbb/appui/format/boutonformat",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button"
    ],
    function(Formatter, Label, Button) {
        return Formatter.extend({
            format : function (iterator) {
                var button, item;
                item = iterator.next();
                button = new Button("menuprincipal_" + item.id);
                button.appendChildWidget(new Label(item.title));
                return button;
            }
        });
    }
);
