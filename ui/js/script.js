/* by @Idered */

var App = App || (function($) {

    var Utils   = {},
        Public  = {};

    Utils = {
        settings: {
            debug: false,
            init: function() {

                $('body').removeClass('no-js');

            }
        }, // settings

        /**
         * Custom log wrapper function
         */
        log: function(what) {

            Utils.settings.debug && window.console && console.log.apply(console, arguments);

        } // log
    };
    var _log = Utils.log;


    Public = {
        init: function() {

            _log('main.js initialized.');

            Utils.settings.init();

            Public.codeHelpers();

        }, // init

        codeHelpers: function() {

            // Escape html
            $('pre code').each(function() {
               $(this).text($(this).html()).fadeIn();
            });

            // Init highlighting
            prettyPrint();

            // Allow user to copy code
            $('pre').delegate('code', 'click', function() {

                var $this  = $(this).parent(),
                    $code  = $this.children('code'),
                    $clone = $code.clone(),
                    text   = $code.text(),
                    height = $code.height();

                $code.replaceWith($('<textarea/>'));

                $this.children('textarea').one('blur', function() {
                    $(this).replaceWith($clone);
                }).height(height).val(text).select();

            });

        } // codeHelpers
    };

    return Public;

})(window.jQuery);

jQuery(document).ready(App.init);
