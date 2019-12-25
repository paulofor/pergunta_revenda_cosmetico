

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadePrecoPage } from './lista-oportunidade-preco';

@NgModule({
  declarations: [
    ListaOportunidadePrecoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadePrecoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadePrecoPage
  ]
})
export class ListaOportunidadePrecoPageModule { }
