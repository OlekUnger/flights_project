export interface IFlight {
  id?: string,
  flightCode: string,
  flightProvider: string,
  sourcePortName: string,
  sourcePortCode: string,
  destinationPortName: string,
  destinationPortCode: string,
  scheduledArrival: Date,
  scheduledDeparture: Date
  status: 'LANDED' | 'ON SCHEDULE' | 'DELAYED'
}
