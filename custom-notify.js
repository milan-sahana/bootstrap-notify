/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">	
*/

// $(document).ready(function () {
    $.fn.cbn = function (var_message, var_type = 'info', var_update = 'no', var_delay=5000) {
        // alert('a');
        var var_title = '';
        var var_icon = '';
        var val_showProgressbar = false;
        var val_allow_dismiss = true;
        let val_placement = {
            from: 'top',
            align: 'right'
        };
        let val_z_index = 6001;

        if (var_type == 'success') {
            var_title = 'Success!! ';
            var_icon = 'fa fa-check-circle-o';

        } else if (var_type == 'danger') {
            var_title = 'Error!! ';
            var_icon = 'fa fa-exclamation-circle';

        } else if (var_type == 'warning') {
            var_title = 'Warning!! ';
            var_icon = 'fa fa-exclamation-circle';
        } else if (var_type == 'loading') {
            var_type = 'info';
            var_title = 'Loading!! ';
            var_icon = 'fa fa-refresh fa-spin fa-fw';
            val_allow_dismiss= false;
            /* val_showProgressbar = true; */
            var_delay = 0;
        } else if (var_type == 'wait') {
            var_type = 'info';
            var_title = 'Wait!! ';
            var_icon = 'fa fa-refresh fa-spin fa-fw';
            /* val_allow_dismiss= false; */
            /* val_showProgressbar = true; */
            var_delay = 0;
        } else {
            var_type = 'info';
            var_title = 'Message!! ';
            var_icon = 'fa fa-info-circle';
        }

        if(var_update=='no') {
            if (typeof window.cbn_placement === 'undefined') {
                // variable is undefined
            }
            else  {
                val_placement = window.cbn_placement;
            }

            if (typeof window.cbn_z_index === 'undefined') {
                // variable is undefined
            }
            else  {
                val_z_index = window.cbn_z_index;
            }

            return window.notify = $.notify({
                    // obj.message
                    // options
                    icon: var_icon,
                    title: var_title,
                    message: var_message,
                    /*
                    url: 'https://github.com/mouse0270/bootstrap-notify',
                    target: '_blank'
                    */
                },
                {
                    /* allow_dismiss: false, */
                    type: var_type,
                    z_index: val_z_index,
                    showProgressbar: val_showProgressbar,
                    allow_dismiss: val_allow_dismiss,
                    delay: var_delay,
                    placement : val_placement,
                    /*
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                    timer: 2000,
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                    */                
                });
        }
        else {
            if(typeof(var_update) != 'object') {
                var_update = window.notify;
            }
            
            var_update.update({type: var_type, icon: var_icon, title: var_title, message: var_message,});
            setTimeout(function() {
                var_update.close();
            }, var_delay);
        }
    };

// });

