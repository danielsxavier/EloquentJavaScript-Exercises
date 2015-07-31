var express = require('express');
var router = express.Router();
var beautify_js = require('js-beautify');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/output', function (req, res, next) {
    var chapter = req.query.chapter;
    var exercise = req.query.exercise;
    var file = require('../public/exercises/chapter' + chapter + '/' + exercise);
    res.send(file.algorithm()); 
});

router.get('/modal', function(req, res, next) {
    var chapter = req.query.chapter;
    var exercise = req.query.exercise;
    var file = require('../public/exercises/chapter' + chapter + '/' + exercise);
    var code = beautify_js(file.code(), { indent_size: 6 });
    res.send({sourcecode: code});
});

module.exports = router;
