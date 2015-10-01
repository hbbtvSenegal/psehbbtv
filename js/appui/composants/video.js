 

require.def("sampleapp/appui/components/simplevideocomponent",
    [
        "antie/widgets/component",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/horizontallist",
        "antie/widgets/horizontalprogress",
        "antie/widgets/verticallist",
        "antie/videosource",
        "antie/widgets/media"
    ],
    function (Component, Button, Label, HorizontalList, HorizontalProgress,VerticalList, VideoSource, Media) { 
        // All components extend Component
        var comp= Component.extend({
            init: function () {
                var self = this;
                this._super("video");
                var videosrc=["deffbuzz.mp4","ngoora.mp4","diougoufi.mp4","reer.mp4","xaliss.mp4","hero.mp4","rddr.mp4","potolamp.mp4"];
				//~ console.log();
                // Get a reference to the current application and device objects
                this._application = this.getCurrentApplication();
                this._device = this._application.getDevice();
				this._progress = new HorizontalProgress("progressBar", true, 0);
                //~ this._progress.setText("My Progress Bar!");
                
                // Create a a label add a class to it, this class can be used as a CSS selector
                var description = new Label("Simple Video Component.");
                description.addClass("description");
                
				var tab= new VerticalList('menuButtons');
                // Create a horizontal list that contains buttons to control the video
                var playerControlButtons = new HorizontalList("playerButtons");
				tab.appendChildWidget(this._progress);
                var play = new Button('play');
                play.appendChildWidget(new Label('PLAY'));
                playerControlButtons.appendChildWidget(play);
                play.addEventListener('select', function(evt) {
                    self.getPlayer().play();
                    
                });

                var pause = new Button('pause');
                pause.appendChildWidget(new Label('PAUSE'));
                playerControlButtons.appendChildWidget(pause);
                pause.addEventListener('select', function(evt) {
                    self.getPlayer().pause();
                    this.appendChildWidget(description);
                });

				var rewind = new Button('rewind');
                rewind.appendChildWidget(new Label('-5s'));
                playerControlButtons.appendChildWidget(rewind);
                rewind.addEventListener('select', function(evt) {
				var currentTime = self.getPlayer().getCurrentTime();
                  self.getPlayer().setCurrentTime(currentTime - 5);
                });

				var fastForward = new Button('fastForward');
                fastForward.appendChildWidget(new Label('+5s'));
				playerControlButtons.appendChildWidget(fastForward);
		  fastForward.addEventListener('select', function(evt) {
		    var currentTime = self.getPlayer().getCurrentTime();
		    self.getPlayer().setCurrentTime(currentTime + 5);
		    //~ self._progress.setValue(self.getPlayer().getCurrentTime()/700+0.5);
                });

                var back = new Button('back');
                back.appendChildWidget(new Label('BACK'));
                playerControlButtons.appendChildWidget(back);
                back.addEventListener('select', function(evt) {
                    if (self._device.getPlayerEmbedMode() === Media.EMBED_MODE_BACKGROUND) {
                        self.showBackground();
                    }
                    // Make sure we destroy the player before exiting
                    self.destroyPlayer();
                    self.parentWidget.back();
                });

                // Append the player control buttons to the component
                this.appendChildWidget(playerControlButtons);
                this.appendChildWidget(tab);
				
				//~ console.log(videoUrl);
                // Add a 'beforerender' event listener to the component that takes care of video instantiation
                this.addEventListener("load", function (evt) {
					console.log(evt.args.id);
					this._progress.setValue(0.0);
                });
                
            
				
				this.addEventListener("beforeshow", function(evt){
						self._onBeforeRender("static/mp4/"+videosrc[evt.args.id]);
					});
		},

            _onBeforeRender: function (evt) {
				var self=this;
                // Create a video player
                // Create the device's video object, set the media sources and start loading the media
                var player = this.createVideoPlayer();
                player.setSources([new VideoSource(evt, 'video/mp4')]);
                console.log('play normalement');
                player.load();
                
                player.play();
                this._intervalID = setInterval( function() { self._progress.setValue(self.getPlayer().getCurrentTime()/200); }, self.getPlayer().getEnded()/1000);
            },
 
            getPlayer : function() {
                return this._player;
            },
 
            destroyPlayer : function() {
                this._player.destroy();
                this.removeChildWidget(this._player);
                this._player = null;
            },
   
            createVideoPlayer: function() {
                var self = this;

                // Create the player and append it to the component
                this._player = new Media('testPlayer', 'video');
                this.appendChildWidget(this._player);

                // Start playing the video as soon as the device fires an antie 'canplay' event
                this._player.addEventListener('canplay', function(evt) {
                    // Some devices have the player in the background behind the HTML page, we need to ensure the
                    // document body is transparent in order to see the video content
                    if (self._device.getPlayerEmbedMode() === Media.EMBED_MODE_BACKGROUND) {
                        self.hideBackground();
                    }

                    // Start playing the media
                    self._player.play();
                });

                // Return a reference to the player object so we can set and load the media source
                return this._player;
            },

            hideBackground : function() {
                this._device.addClassToElement(document.body, 'background-none');
                this._application.getRootWidget().addClass('background-none');
            },
 
            showBackground : function() {
                if (this._device.getPlayerEmbedMode() === Media.EMBED_MODE_BACKGROUND) {
                    this._device.removeClassFromElement(document.body, 'background-none');
                    this._application.getRootWidget().removeClass('background-none');
                }
            }
        });
		return comp;
		
    }
    
);
