const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {
        flights
    });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight });
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    try {
      await Flight.create(req.body);
      res.redirect('/flights');
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }