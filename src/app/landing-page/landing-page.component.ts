import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  currentGeolocation: Object = {}
  deniedGeolocation: String = ''

  getGeolocation() {
    if(window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.currentGeolocation = position
          console.log(position)
        },
        error => {
          this.deniedGeolocation = "You have to allow geolocation to use this app"
        }
        )
    }
  }

  ngOnInit() {
    this.getGeolocation()
  }

}
