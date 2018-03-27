import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(
        position => {
          resolve(position.coords);
        },
        error => {
          reject(error);
        }, {
          timeout: 10000,
          maximumAge: 60000,
          enableHighAccuracy: true
        }
      );
    });
  }


   // Converts numeric degrees to radians
   toRad(Value) {
    return Value * Math.PI / 180;
  }

  distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const lat1a = this.toRad(lat1);
    const lat2a = this.toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1a) * Math.cos(lat2a);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }
}
