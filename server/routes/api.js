
const express = require('express');

let router = express.Router();

router.route('/user').get(function(req, res) {
    const user = req.session['user'] || { type: 'dev', user: 'dev' };

    res.json(user);
});

module.exports = router;
