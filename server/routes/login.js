
const express = require('express');

let router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.render('login');
    })
    .post(function(req, res, next) {
        const email    = req.body['email'];
        const password = req.body['password'];

        //
        // perform authentication here...
        //

        req.session['authenticated'] = true;

        req.session['user'] = {
            email : email,
            type  : 'admin'
        };

        res.json({ success: true });
    });

module.exports = router;
