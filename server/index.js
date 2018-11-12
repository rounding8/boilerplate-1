
const express = require('express');
const mongo   = require('mongodb').MongoClient;
const parser  = require('body-parser');
const path    = require('path');
const session = require('express-session');

const app = express();

const Demo = {

    PORT: process.env.PORT || 3000,

    init: function() {
        app.use(parser.json());
        app.use(parser.urlencoded({ extended: true }));

        app.set('view engine', 'ejs'                                                );
        app.set('views',       path.join(__dirname, '..', 'client', 'views', 'path'));

        app.use('/favicon.ico', express.static(path.join(__dirname, '..', 'client', 'static', 'icon', 'favicon.ico')));
        app.use('/static',      express.static(path.join(__dirname, '..', 'client', 'static'))                       );

        Demo.load();
    },

    load: function() {
        Demo.session().route().db().exec();
    },

    exec: function() {
        app.listen(Demo['PORT'], function() {
            console.log(`\nDemo #1 is running @ http://localhost:${Demo['PORT']}\n`);
        });
    },

    authenticate: function(req, res, next) {
        // authenticate user before passing to next middleware f(n)

        // e.g. unless in dev mode (no auth required)
        // req.session['authenticated'] || req.headers.host == 'localhost:3000' ? next() : res.redirect('/login');

        req.session['authenticated'] ? next() : res.redirect('/login');
    },

    db: function() {
        // connect (once) to relevant databases here, e.g.

        /*
            mongo.connect('...', function(err, db) {
                if (err) {
                    // handle errors here...
                } else {
                    // hook up db connections
                    app.set('db-name', db);
                }
            });
        */

        return this;
    },

    route: function() {
        // public routes - accessible without authentication
        app.get('/alive',  Demo.routeAlive          );
        app.use('/login',  require('./routes/login'));

        // private routes - accessible following authentication
        app.all('*',       Demo.authenticate        );
        app.get('/',       Demo.routeHome           );
        app.use('/api',    require('./routes/api')  );
        app.get('/logout', Demo.routeLogout         );
        app.get('/user',   Demo.routeUser           );

        return this;
    },

    routeAlive: function(req, res) {
        res.set('Content-Type', 'text/plain');
        res.send(true);
    },

    routeHome: function(req, res) {
        res.render('index');
    },

    routeLogout: function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/login');
        });
    },

    routeUser: function(req, res) {
        res.render('user', {
            user: req.session['user']
        });
    },

    session: function() {
        app.use(session({
            resave            : false,
            saveUninitialized : false,
            secret            : 'rounding8-demo1'
        }));

        return this;
    }
};

Demo.init();
