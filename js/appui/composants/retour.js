/*
*
*/

require.def("psehbb/appui/composants/retour",
	[
		"antie/widgets/component",
		"antie/events/keyevent"
	],
	function(Component, KeyEvent){
		'use strict';
		return Component.extend({
			//constructeur
			init: function(id){
				var self = this;
				self._super(id);

				var keyRetour = new KeyEvent("retour", KeyEvent.VK_LEFT);
				var keyBlue = new KeyEvent("info", KeyEvent.VK_LEFT);
				var keyVerte = new KeyEvent("pub", KeyEvent.VK_LEFT);
				var keyRouge = new KeyEvent("detail", KeyEvent.VK_LEFT);

				this.addEventListener("keydown", function(evt){
					self.fireEvent(keyRetour);
					self.fireEvent(keyBlue);
					self.fireEvent(keyVerte);
					self.fireEvent(keyRouge);
				});

				//~ this.addEventListener("beforerender", function(evt){
					//~ self.bubbleEvent(keyRetour);
				//~ });
			},
			//les evenements a ajouter
			_onBeforeRender: function(){

			}

		});
	}
);



