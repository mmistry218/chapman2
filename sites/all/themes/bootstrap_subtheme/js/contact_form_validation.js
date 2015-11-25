  jQuery(document).ready(function() {
    jQuery('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
       
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your name'
                    }
                }
            },             
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            }, 
            comment: {
                validators: {
                      stringLength: {
                        min: 1,
                        max: 300,
                        message:'Please enter at least 1 characters and no more than 300'
                    },
                    notEmpty: {
                        message: 'Please enter a message'
                    }
                    }
                }
            }
        });

         jQuery('#contact_form').submit(function(event){
            if(!event.isDefaultPrevented())
            { 
                
                var name = jQuery("#name").val();
                var fromEmail = jQuery("#email").val();
                var comment = jQuery("#comment").val();
                
                jQuery.ajax({
                    type: "POST",
                    url: "sites/all/themes/bootstrap_subtheme/js/contact_email.php",                    
                    data: "name=" + name + "&email=" + fromEmail + "&message=" + comment,
                    cache: false,
                    success: function() {
                        jQuery('#success_message').slideDown({ opacity: "show" }, "slow");
                        jQuery('#contact_form').data('bootstrapValidator').resetForm();

                        //clear all fields
                        jQuery('#contact_form').trigger("reset");
                    },
                    error: function() {
                        jQuery('#fail_message').slideDown({ opacity: "show" }, "slow");
                        jQuery('#contact_form').data('bootstrapValidator').resetForm();

                        //clear all fields
                        jQuery('#contact_form').trigger("reset");
                    }
                });

                event.preventDefault();
                                
            }
            
        });
});

