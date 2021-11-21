

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadePrecoTabelaPage } from './lista-oportunidade-preco-tabela';

@NgModule({
  declarations: [
    ListaOportunidadePrecoTabelaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadePrecoTabelaPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadePrecoTabelaPage
  ]
})
export class ListaOportunidadePrecoTabelaPageModule { }
