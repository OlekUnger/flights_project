import { Component, OnInit } from '@angular/core';
import { IFlight } from './flight/flight.interface';
import { FlightModel } from './flight/flight.model';
import { FlightService } from './flight/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'client';
  public flights: any;

  constructor(public flightService: FlightService) {
  }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((res: IFlight[]) => {
      console.log(res)
      this.flights = FlightModel.prepareData(res);
    })
  }

  public deleteFlight(id: string) {
    this.flightService.deleteFlight(id).subscribe((res: string) => alert(res))
  }
}
