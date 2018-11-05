import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AirServiceService {

  constructor(public http: HttpClient) { }

  private corsAnywhere = "https://cors-anywhere.herokuapp.com/"

  private flightsUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json'


  public getFlights(lat, lng): Observable<any> {
    return this.http.get(`${this.corsAnywhere}${this.flightsUrl}?lat=${lat}&lng=${lng}&fDstL=0&fDstU=200`)
  }
}
