/*
 * Ce fichier est le premier composant de  notre application 
 * */ 

require.def('psehbb/appui/composants/main', 
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
			this._super('main');
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();
			var sef=this;
			var menuPrincipal, menuSecondaire, carouselMenu, Menu;
			menuPrincipal=new HorizontalList('menuPrincipal');
			menuSecondaire=new HorizontalList('menuSecondaire');
			
			//~ Les boutons du menu principal
			var btnCours, btnDivertissement, btnInfos, btnPresentation, btnThese;
			
			//~ Les boutons des sous menu
			var tabBtnCours={
					'Anglais': new Button('Anglais'),
					'Francais': new Button('Francais'),
					'Physique': new Button('Physique'),
					'Electronique': new Button('Electronique'),
					'Droits': new Button('Droits')
				};
			
			var tabBtnDivertissement={
					'Music': new Button('Music'),
					'Jeux': new Button('Jeux'),
					'Films': new Button('films'),
					'Video': new Button('Video')
				};
			
			var tabBtnInfos={
					'Description': new Button('description'),
					'Orientations': new Button('orientation'),
					'universite': new Button('universite')
				};
			
			var tabBtnThese={
					'Kalz': new Button('kalz'),
					'bng': new Button('bng'),
					'sfallou': new Button('sfallou'),
					'oury': new Button('oury'),
					'kama': new Button('kama')
				};
			
			
			btnCours=new Button('btnCours');
			btnCours.appendChildWidget(new Label('Cours'));
			btnCours.addEventListener('focus', function(evt){
					if(menuSecondaire.getChildWidgets()!=null){
						menuSecondaire.removeChildWidgets();
					}
					
				}
			);
			btnDivertissement=new Button('btnDivertissment');
			btnDivertissement.appendChildWidget(new Label('Divertissements'));
			
			btnInfos=new Button('btnInfoss');
			btnInfos.appendChildWidget(new Label('Informations'));
			
			btnPresentation=new Button('btnPresentation');
			btnPresentation.appendChildWidget(new Label('Présentations'));
			
			btnThese=new Button('btnThese');
			btnThese.appendChildWidget(new Label('Thèses'));
			
			 //~ Ajout des boutons du menu principal dans leur contenaire
			menuPrincipal.appendChildWidget(btnCours);
			menuPrincipal.appendChildWidget(btnDivertissement);
			menuPrincipal.appendChildWidget(btnInfos);
			menuPrincipal.appendChildWidget(btnPresentation);
			menuPrincipal.appendChildWidget(btnThese);
			 
			 //~ Ajout des menus dans dans une liste verticale
			 
			menu=new VerticalList('menu');
			menu.appendChildWidget(menuPrincipal);
			menu.appendChildWidget(menuSecondaire);
			
			//~ Ajout du menu dans l'application
			this.appendChildWidget(menu);
			// before rendering the component
                this.addEventListener("beforerender", function (evt) {
                    //~ self._onBeforeRender(evt);
                    //~ self.getCurrentApplication().pushComponent("maincontainer", "sampleapp/appui/components/simplecarouselcomponent");
                    
                });
		}
	});
	
	}
);
