import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500,
    },
    {
      nombre: 'Vegeta',
      poder: 1200,
    }
  ];

  get personajes(): Personaje[] {

    return [...this._personajes];

  }

  agregarNuevoPersonaje( personaje: Personaje ) {

    this._personajes.push(personaje);

  }

  constructor() {

    console.log('Servicio inicializado');

  };

};
