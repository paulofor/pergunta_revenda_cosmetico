

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadeGraficoPrecoPage } from './lista-oportunidade-grafico-preco';

@NgModule({
  declarations: [
    ListaOportunidadeGraficoPrecoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadeGraficoPrecoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadeGraficoPrecoPage
  ]
})
export class ListaOportunidadeGraficoPrecoPageModule { }
