require.def("psehbb/appui/data/bouton",
    [
        "antie/class",
        
    ],
    function(Class) {
        return Class.extend({
            loadData : function(callbacks) {
                callbacks.onSuccess(
                    [
                    
						                 {
                            "id":"1",
                            "title":"Cours",
                            "src": "cours"
                        },
                        {
                            "id":"2",
                            "title":"Divertissements",
                            "src":"divertissements"
                        },
                        {
                            "id":"3",
                            "title":"Presentations",
                            "src":"presentations"
                        },
                        {
                            "id":"4",
                            "title":"Théses",
                            "src":"theses",
                        },
                        {
                            "id":"5",
                            "title":"Informations",
                            "src":"informations"
                        },
                        {
                            "id":"6",
                            "title":"Universités",
                            "src":"universites"
                        },
                        {
                            "id":"7",
                            "title":"Les ENO",
                            "src":"eno"
                           
                        },
                        {
                            "id":"8",
                            "title":"A propos",
                            "src":"apropos"
                           
                        }
 
                    ]
                );
            }
        });
    });
