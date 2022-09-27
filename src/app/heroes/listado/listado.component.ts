import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan','Hulk','Torh'];
  heroeBorrado: string = '';

  borrarHeroe (){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
