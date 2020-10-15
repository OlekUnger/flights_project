const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
        flightCode: { type: String },
        flightProvider: { type: String },
        sourcePortName: { type: String },
        sourcePortCode: { type: String },
        destinationPortName: { type: String },
        destinationPortCode: { type: String },
        scheduledArrival: { type: Date },
        scheduledDeparture: { type: Date },
        status: { type: String }
    },
    {
        toObject: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        },

        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);


module.exports = model('flights', flightSchema);
