

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadePage } from './lista-oportunidade';

@NgModule({
  declarations: [
    ListaOportunidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadePage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadePage
  ]
})
export class ListaOportunidadePageModule { }
