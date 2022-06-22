import { Component } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage {

  currentCenter: any;
  coordinates: google.maps.LatLngLiteral[] = [];
  defaultZoom = 14;
  center: google.maps.LatLngLiteral;

  constructor() { }

  ionViewDidEnter() {
    this.getCurrentPosition();
    this.watchPosition();
  }


  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    }
  }

  watchPosition() {
    Geolocation.watchPosition({}, position=> {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.coordinates.push ({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

}
