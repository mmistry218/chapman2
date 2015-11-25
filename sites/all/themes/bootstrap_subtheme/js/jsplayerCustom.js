jQuery( document ).ready(function() {
	jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.ready  ,function(event) { 
		jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.pause  ,function(event) { 
			jQuery(this).css('background-image', 'url("../sites/all/themes/bootstrap_subtheme/img/space.gif")');
		  });
	  });
});