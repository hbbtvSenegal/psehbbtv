/*
 * Ce ficher permet de créer une application et d'initialiser le conteneur 
 * Tous les autres fichiers utilisent l'application afin d'y ajouter des widgets et des composants
 * Ce fichier, aprés avoir initialisé l'application, ajoute comme premier composant le fichier main.js
 * */ 
require.def('psehbb/appui/psehbb',
    [
        'antie/application',
        'antie/widgets/container'
    ],
    function(Application, Container) {
    
        return Application.extend({
            init: function(appDiv, styleDir, imgDir, callback) {
                var self;
                self = this;
                self._super(appDiv, styleDir, imgDir, callback);
                self._setRootContainer = function() {
                    var container = new Container();
                    container.outputElement = appDiv;
                    self.setRootWidget(container);
                };
            },
            
            run: function() {
                // Called from run() as we need the framework to be ready beforehand.
                this._setRootContainer();
                this.addComponentContainer("maincontainer", "psehbb/appui/composants/main");
            }
        });
    }
);
