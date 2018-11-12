
App.Menu = (function($) {

    return Menu = {

        MENU : $('header menu'),
        NAV  : $('header nav'),

        init: function() {
            Menu['visible'] = false;

            // add padding to top if Firefox or Safari (FF 1.0+ | SA <= 9)
            const FIREFOX = typeof InstallTrigger !== 'undefined',
                  SAFARI  = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

            if (FIREFOX || SAFARI) {
                $('nav span').css('margin-top', '1.25em');
            }

            Menu.load();
        },

        load: function() {
            // load menu-specific data here...
            Menu.exec();
        },

        exec: function() {
            Menu.MENU.on('mouseleave', Menu.handleMouseleave);
            Menu.NAV.on('mouseenter', Menu.handleMouseenter).on('click', Menu.handleClick);
        },

        handleClick: function() {
            Menu['visible'] ? Menu.hide() : Menu.show();
        },

        handleMouseenter: function() {
            Menu.show();
        },

        handleMouseleave: function() {
            Menu.hide();
        },

        hide: function() {
            if (Menu['visible']) {
                Menu.toggle();
                Menu['visible'] = false;
            }
        },

        show: function() {
            if (!Menu['visible']) {
                Menu['visible'] = true;
                Menu.toggle();
            }
        },

        toggle: function() {
            $([Menu.MENU, Menu.NAV]).toggleClass('toggle');
        }
    };

}(jQuery));
