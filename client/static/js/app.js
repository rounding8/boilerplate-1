
const App = {

    init: function() {
        console.log('=> App.init()');

        App['data'] = {};

        $.get('/api/user', App.load, 'json');
    },

    load: function(user) {
        console.log('=> App.load()');

        App['user'] = user;

        console.log(user);

        $.when(
            $.get('/static/js/menu.js', 'json'),
            // $.get('other js here..', 'json')
        ).then(App.exec);
    },

    exec: function() {
        console.log('=> App.exec()');

        App.Menu.init();

        location.pathname == '/user' ? App.viewUser() : App.viewHome();
    },

    viewHome: function() {
        console.log('=> App.viewHome()');
    },

    viewUser: function() {
        console.log('=> App.viewUser()');
    }
};

App.init();
