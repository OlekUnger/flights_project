import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFlight } from './flight.interface';
import { FlightModel } from './flight.model';

@Injectable({providedIn: 'root'})
export class FlightService {
  constructor(private http: HttpClient) {
  }

  public getFlights(): any {
    return this.http.get<IFlight[]>('/api/flights')
      .pipe(map(res => {
        const flights = FlightModel.prepareData(res);
        return flights;
      }))
  }

  public deleteFlight(id: string): Observable<string> {
    return this.http.delete<string>(`/api/flights/delete/${id}`)
  }


}
