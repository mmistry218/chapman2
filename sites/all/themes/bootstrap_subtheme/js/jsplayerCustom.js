jQuery( document ).ready(function() {
	jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.ready  ,function(event) { 
		jQuery('.jp-jplayer').bind(jQuery.jPlayer.event.pause  ,function(event) { 
		    jQuery('body').fadeTo('slow', 0.3, function()
		    {
		        jQuery(this).css('background-image', 'url("../sites/all/themes/bootstrap_subtheme/img/space.gif")');
		     }).fadeTo('slow', 1);
		  });
	  });
});