import { Component, OnInit } from '@angular/core';
import { AirServiceService } from '../services/air-service.service'
import { PositionService } from '../services/position.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private airService: AirServiceService,
    private positionService: PositionService
    ) { }

  private flights: any[] 

  private getFlights(): void {
      this.positionService.getGeolocation()
      .subscribe(position => {
          const { latitude, longitude } : { latitude: Number, longitude: Number } = position.position.coords
          this.airService.getFlights(latitude, longitude)
            .subscribe(flights => {
              flights.acList.sort((a, b) => {
                return a.Alt - b.Alt;
              });
              const serializedFlights = JSON.stringify(flights)
              localStorage.setItem('flights', serializedFlights)
              return this.flights = flights
            })
        })
  }

  ngOnInit() {
    this.getFlights()
  }

}
