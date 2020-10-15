import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(res => console.log(res))
  }
}
