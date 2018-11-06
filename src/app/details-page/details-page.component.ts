import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AirServiceService } from '../services/air-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private airService: AirServiceService
    ) { }

  private flightDetails: Object
  private flightId: Number

  private displayData(): void {
    this.activatedRoute.params
      .subscribe(params => this.flightId = params['id'])
    const deserialisedFlights = JSON.parse(localStorage.getItem('flights'))
    this.flightDetails = deserialisedFlights.acList.find(flight => {
      return flight.Icao === this.flightId
    })
  }

  ngOnInit() {
    this.displayData()
  }

}
