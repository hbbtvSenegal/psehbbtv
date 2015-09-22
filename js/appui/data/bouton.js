require.def("psehbb/appui/data/bouton",
    [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({
            loadData : function(callbacks) {
                callbacks.onSuccess(
                    [
                        {
                            "id":"1",
                            "title":"Cours"
                        },
                        {
                            "id":"2",
                            "title":"Divertissements"
                        },
                        {
                            "id":"3",
                            "title":"Presentations"
                        },
                        {
                            "id":"4",
                            "title":"Théses"
                        },
                        {
                            "id":"5",
                            "title":"Informations"
                        },
                        {
                            "id":"6",
                            "title":"Universités"
                        },
                        {
                            "id":"7",
                            "title":"Les ENO",
                           
                        },
                        {
                            "id":"8",
                            "title":"A propos"
                           
                        }
                    ]
                );
            }
        });
    });
