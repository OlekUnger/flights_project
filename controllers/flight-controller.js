const FlightModel = require('../models/flight-model');
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
        const flight = new FlightModel({
            flightCode: uuidv4(),
            flightProvider: req.body.flightProvider,
            sourcePortName: req.body.sourcePortName,
            sourcePortCode: req.body.sourcePortCode,
            destinationPortName: req.body.destinationPortName,
            destinationPortCode: req.body.destinationPortCode,
            scheduledArrival: new Date('2014-04-04'),
            scheduledDeparture: new Date('2014-04-03'),
            status: req.body.status
        });
        try {
            await flight.save();
            res.status(httpStatus.CREATED).json(flight)
        } catch(e) {
            errorHandler(res, e)
        }
    },

    async DeleteFlight(req, res) {
        try {
            await FlightModel.remove({_id: req.params.id});
            res.status(200).json({success: true, message: 'Flight deleted'});
        } catch(e) {
            errorHandler(res, e)
        }
    },

    async UpdateFlight(req, res) {
        try {
            const flight = await FlightModel.findOneAndUpdate(
                { _id: req.params.id },
                {$set: req.body},
                {new: true}
            )
            res.status(httpStatus.OK).json(flight);
        } catch (e) {
            errorHandler(res, e)
        }
    }
};
