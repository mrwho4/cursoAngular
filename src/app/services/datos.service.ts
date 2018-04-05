import { Injectable } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatosService {


  constructor(private http: HttpClient) { }

  sucursales = [
    new Sucursal('1', 'Rivadavia 500', '4500-0000'),
    new Sucursal('2', 'Corrientes 124', '4500-0000'),
    new Sucursal('3', 'Florida 50', '4500-0000'),
  ];

  endpoint = 'http://localhost:3000/sucursales';

  getSucursales(): Promise<Sucursal[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.endpoint}/`)
        .subscribe(
          datos => {
            console.log(datos);
            resolve(datos as Sucursal[]);
          });
    });

  }

  getSucursal(id: string): Observable<Object> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  /*    // this.http.get(´${this.endpoint}/´)
     return this.sucursales;
   }

 addSucursal(s: Sucursal) {
   this.sucursales.push(s);
 } */

  addSucursal(s: Sucursal) {
    this.http.post(`${this.endpoint}/`, s)
      .subscribe(respuesta => {

      });
  }

  deleteSucursal(s: Sucursal) {
    const id = (s as any)._id;
    this.http.delete(`${this.endpoint}/${id}`, id)
      .subscribe(respuesta => {

      });
  }
}
