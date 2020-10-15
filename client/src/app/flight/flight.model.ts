import { IFlight } from './flight.interface';

export class FlightModel {
  public static prepareData(data: IFlight[]): FlightModel[] {
    if (!data || !data[0]) {
      return [];
    }
    return data.map((item: IFlight): FlightModel => {
      return new FlightModel(item);
    });
  }

  public id: string;
  public flightCode: string;
  public flightProvider: string;
  public sourcePortName: string;
  public sourcePortCode: string;
  public destinationPortName: string;
  public destinationPortCode: string;
  public scheduledArrival: Date;
  public sheduledDeparture: Date;
  public status: string;

  constructor(data?: IFlight) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.flightCode = data.flightCode;
    this.flightProvider = data.flightProvider;
    this.sourcePortCode = data.sourcePortCode;
    this.sourcePortName = data.sourcePortName;
    this.destinationPortCode = data.destinationPortCode;
    this.destinationPortName = data.destinationPortName;
    this.sheduledDeparture = data.scheduledDeparture;
    this.scheduledArrival = data.scheduledArrival;
    this.status = data.status;
  }



}
