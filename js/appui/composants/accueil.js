/*
 * Ce fichier est le premier composant de  notre application 
 * */ 

require.def('psehbb/appui/composants/accueil', 
	[
		"antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "antie/widgets/verticallist",
        "antie/widgets/horizontallist",
        "antie/widgets/label", 
        "antie/widgets/button",
        "antie/widgets/carousel",
        "antie/datasource",
        "psehbb/appui/format/boutonformat",
        "psehbb/appui/data/bouton",
        "psehbb/appui/composants/carouselmenu"
        
	],
	function (Component, DataSource, HorizontalCarousel,VerticalList, HorizontalList, Label, Button,Carousel, DataSource, BoutonFormat, Bouton, CarouselMenu){
	
	return Component.extend({
		
		init:function(){
			this._super('main');
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();
			var sef=this;
			var menuPrincipal, menuSecondaire, carouselMenu, Menu;
			menuPrincipal=new CarouselMenu(this._getCarouselConfig());
			menu=new VerticalList('menu');
			menu.appendChildWidget(menuPrincipal);
			//~ this.appendChildWidget(menuPrincipal);
			this.appendChildWidget(menu);
			this.addEventListener("beforerender", function (evt) {
				self._onBeforeRender(evt);
             });
             
			//~ this.addEventListener("aftershow", function appReady(evt) {
			//~ self.getCurrentApplication().ready();
			//~ self.removeEventListener('aftershow', appReady);
			//~ });
           },

            _getCarouselConfig: function () {
                return {
                    description: "Carousel example, LEFT and RIGHT to navigate, SELECT to go back",
                    dataSource: new DataSource(null, new Bouton(), 'loadData'),
                    formatter: new BoutonFormat(),
                    orientation: Carousel.orientations.HORIZONTAL,
                    carouselId: 'verticalCullingCarousel',
                    animOptions: {
                        skipAnim: false
                    },
                    alignment: {
                        normalisedAlignPoint: 0.5,
                        normalisedWidgetAlignPoint: 0.5
                    },
                    initialItem: 4,
                    type: "CULLING",
                    lengths: 264
                };
            },

            _onBeforeRender: function () {
            }
	});
	
	}
);
