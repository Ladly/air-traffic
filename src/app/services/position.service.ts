import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() { }

  public position: Object
  public allowedGeolocation: boolean

  getGeolocation(): Observable <any> {
    return Observable.create(observer => {
      if ( window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {          
            this.allowedGeolocation = true
            this.position = position
            observer.next({ geolocation: this.allowedGeolocation, position: this.position })
            observer.complete()
          },
          error => {
            this.allowedGeolocation = false
            observer.next({ geolocation: this.allowedGeolocation })
            observer.complete()
          }
        )
      }
    })
  }

}
