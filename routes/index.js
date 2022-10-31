var express = require('express');
var router = express.Router();


//Creates 81 elements for the sudoku grid
var elements = Array.from(Array(81).keys());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sudoku Solver', elements});
});

module.exports = router;
