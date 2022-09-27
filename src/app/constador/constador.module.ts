import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { ContadorComponent } from './constador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ContadorModule {};
