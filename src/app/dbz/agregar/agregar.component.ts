import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input('personajes')
  // personajes: Personaje[] = [];

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // @Input('nuevo')
  nuevo: Personaje = {
    nombre: '',
    poder: undefined,
  };

  agregar() {

    if (this.nuevo.nombre === '') { return }
    if (this.nuevo.poder === undefined) { return }
    // this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: undefined,
    };

  }

  get personajes():Personaje[] {

    return this.dbzService.personajes;

  }

  constructor(private dbzService: DbzService) {

  }


}
