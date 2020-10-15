const Flight = require('../models/flight-model');
const { v4: uuidv4 } = require('uuid');
const httpStatus = require('http-status-codes');
const errorHandler = require('../utils/errorHandler');

module.exports = {
    async GetFlights(req, res) {
       try {
           const flights = await Flight.find({});
           res.status(httpStatus.OK).json(flights);
       } catch(e) {
           errorHandler(res, e)
       }
    },

    async CreateFlight(req, res) {
        const flight = new Flight({
            flightCode: uuidv4(),
            flightProvider: req.body.flightProvider,
            sourcePortName: req.body.sourcePortName,
            sourcePortCode: uuidv4(),
            destinationPortName: req.body.destinationPortName,
            destinationPortCode: uuidv4(),
            scheduledArrival: new Date('2014-04-04'),
            scheduledDeparture: new Date('2014-04-03')
        });
        try {
            await flight.save();
            res.status(200).json(flight)
        } catch(e) {
            errorHandler(res, e)
        }
    },

    async DeleteFlight(req, res) {
        try {
            await Flight.remove({_id: req.params.id});
            res.status(200).json({message: 'Flight deleted'});
        } catch(e) {
            errorHandler(res, e)
        }
    }
};
