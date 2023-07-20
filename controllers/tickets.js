const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    new: newTicket,
    addToFlight,
    create,
};

async function newTicket(req, res) {
    const ticket = await Ticket.find({}).sort('seat');
    res.render(`flights/${flight._id}/tickets/new`, { title: 'Add Ticket', ticket });
};

async function addToFlight(req, res) {
    const ticket = await Ticket.findById(req.params.id);
    ticket.flight.push(req.body.flightId);
    await ticket.save();
    res.redirect(`/flights/${flight._id}`);
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    try {
      await Ticket.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
};