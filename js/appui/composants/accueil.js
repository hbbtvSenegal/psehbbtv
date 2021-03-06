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
        "psehbb/appui/format/boutonformat",
        "psehbb/appui/data/bouton",
        "psehbb/appui/format/format",
        "psehbb/appui/format/formatsecond"
        //~ "psehbb/appui/data/boutoneno",
        //~ "psehbb/appui/data/boutoninfo",
        //~ "psehbb/appui/data/boutonpresentation",
        //~ "psehbb/appui/data/boutonuniversite",
        //~ "psehbb/appui/data/boutondivertissement"
       
	],
	function (
	Component, 
	DataSource, 
	HorizontalCarousel,
	VerticalList, 
	HorizontalList, 
	Label, 
	Button,
	Carousel, 
	BoutonFormat, 
	Bouton,
	Format,
	FormatSecond
	)
	{
	
	return Component.extend({
		
		init:function(){
			this._super('main');
			var sef=this;
			this._application=this.getCurrentApplication();
			//~ var courSource=new DataSource(this, new BoutonCours(), "loadData");
			this._dataSource = new DataSource(this, new Bouton(), "loadData");
			
			this._menuDonnees= new HorizontalCarousel("menuDonnees", new BoutonFormat(this._application));
			this._menuSecondaire= new HorizontalCarousel("menuSecondaire", new FormatSecond(this._application, this._menuDonnees));
			this._menuPrincipal = new HorizontalCarousel("menuPrincipal", new Format(this._application, this._menuSecondaire));
			 //~ On change ici le mode de navigation. Pour avoir un mode de navigation continue, il faut décommenter la ligne suivante ou bien
			 //~ remplacer le paramètre par HorizontalCarousel.WRAP_MODE_VISUAL
			this._menuPrincipal.setWrapMode(HorizontalCarousel.WRAP_MODE_NAVIGATION_ONLY );
			//~ On ajoute le menuprincipal dans une liste verticale
			this._menu=new VerticalList('menu');
			this._menu.appendChildWidget(this._menuPrincipal);
			this._menu.appendChildWidget(this._menuSecondaire);
			this._menu.appendChildWidget(this._menuDonnees);
			this.appendChildWidget(this._menu);
			
			//~ On ajoute les données attachées au menuprincipal
			 this._menuPrincipal.setDataSource(this._dataSource);
			//~ if(this._menuPrincipal.getSelectedChildWidgetIndex()=>1)
			//~ this._menuSecondaire.setDataSource(courSource);
			

           }
            
	});
	
	}
);
