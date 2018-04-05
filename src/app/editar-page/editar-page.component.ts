import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { Sucursal } from '../model/Sucursal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-editar-page',
  templateUrl: './editar-page.component.html',
  styleUrls: ['./editar-page.component.css']
})
export class EditarPageComponent implements OnInit {

  id: number;
  loading = false;
  sucursal: Sucursal;

  validadores = {
    validaTelefono: componente => {
      console.log(componente);
      return null;
    },
    validaDireccion: componente => {
      return Observable.create(observer => {
        observer.next({
          direccioninvalida: true
        });
        observer.complete();
      })
    }
  }

  formEdition: FormGroup = this.fb.group({
    numero: ['', [Validators.required]],
    direccion: ['', [Validators.required, Validators.minLength(5), , this.validadores.validaDireccion]],
    telefono: ['', this.validadores.validaTelefono]
  }) ;

  constructor(
    private ruta: ActivatedRoute, 
    private datos: DatosService,
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    // const id1 = this.ruta.snapshot.paramMap.get('id'); //console.log(id); // tener en cuenta que si se usa esto y cambia el valor del id, los datos 
    // del formulario no se refrescan debido al snapshot

    // this.formEdition.valueChanges.subscribe(
    //   value => this.store.dispatch(editFormUpdated(value));
    // )

    this.loading = true;
    this.ruta.paramMap.subscribe(
      paramMap => {
        const id2 = paramMap.get('id');
        this.datos.getSucursal(id2)
        .subscribe(s => {
          this.sucursal= s as Sucursal;
          this.loading = false;

          this.formEdition.setValue(this.sucursal);
          
          //console.log(this.sucursal)
        })

        // this.formEdition = this.fb.group({
        //   numero: [this.sucursal.numero],
        //   direccion: [this.sucursal.direccion],
        //   telefono: [this.sucursal.telefono]
        // })
      }
    )
  }

}
