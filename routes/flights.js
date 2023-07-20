var express = require('express');
var router = express.Router();

//create controller module
const flightsCtrl = require('../controllers/flights');
const flights = require('../controllers/flights');

// GET route for /flights/new
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);

//GET route for /flights INDEX
router.get('/', flightsCtrl.index);

//

router.get('/:id', flightsCtrl.show);

module.exports = router;
