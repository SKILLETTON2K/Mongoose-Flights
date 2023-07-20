const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX','SAN']
    },
    arrival: {
      type: Date,
      required: true
    }
  }, {
    timestamps: true
  });

const flightSchema = new Schema ({
    airline: {
     type: String
    },
    airport: {
     type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX','SAN']
    },
    flightNo:{
     type: Number
    },
    departs:{
     type: Date
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);