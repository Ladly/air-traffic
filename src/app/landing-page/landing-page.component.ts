import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public postionService: PositionService) { }

  geolocation: Boolean

  private allowedGeolocation(): void {
    this.postionService.getGeolocation()
    .subscribe(res => {
      this.geolocation = res.geolocation
    })
  }

  ngOnInit() {
    this.allowedGeolocation()

  }

}
