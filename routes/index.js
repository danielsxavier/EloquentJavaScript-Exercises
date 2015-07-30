var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/output', function (req, res, next) {
    //algorithm = req.query.algorithm;
    var lol = require('../public/exercises/chapter02/Chess');
    res.send(lol.algorithm());
    
//testing VsCode
});

module.exports = router;
