/*
 * Ce fichier est le premier composant de  notre application 
 * */ 

require.def('psehbbtv/appui/composants/main', 
	[
		"antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "antie/widgets/verticallist",
        "antie/widgets/horizontallist",
        "antie/widgets/label", 
        "antie/widgets/button"
	],
	function (Component, DataSource, HorizontalCarousel,VerticalList, HorizontalList, Label, Button){
	
	return Component.extend({
		
		init:function(){
			this_super('main');
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();
			var sef=this;
			var menuPrincipal, menuSecondaire, carouselMenu;
			menuPrincipal=new HorizontalList('menuPrincipal');
			menuSecondaire=new HorizontalList('menuSecondaire');
			//~ LEs boutons du menu principal
			var btnCours, btnDivertissement, btnInfos, btnPresentation, btnThese;
			//~ Les boutons du sous menu cours
			var btn
			btnCours=new Button('btnCours');
			btnCours.appendChildWidget(new Label('Cours'));
			btnCours.addEventListener('focus', function(evt){
					if(menuSecondaire.getChildWidgets()!=null){
						menuSecondaire.removeChildWidgets();
					}
					
				}
			);
			btnDivertissement=new Button('btnDivertissment');
			btnDivertissment.appendChildWidget(new Label('Divertissement'));
			
			btnInfos=new Button('btnInfoss');
			btnInfos.appendChildWidget(new Label('Infos'));
			
			btnPresentation=new Button('btnPresentation');
			btnPresentation.appendChildWidget(new Label('PResentation'));
			
			btnThese=new Button('btnThese');
			btnThes.appendChildWidget(new Label('Theses'));
			
		}
	});
	
	}
);
