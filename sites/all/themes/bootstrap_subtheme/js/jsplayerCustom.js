jQuery( document ).ready(function() {
	jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.ready  ,function(event) { 
		jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.pause  ,function(event) { 
			jQuery('body').css('background-image', 'url("../sites/all/themes/bootstrap_subtheme/img/dark_earth.jpg")');
		  });
	  });
});