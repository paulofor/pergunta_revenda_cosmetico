

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadePrecoAssinaturaPage } from './lista-oportunidade-preco-assinatura';

@NgModule({
  declarations: [
    ListaOportunidadePrecoAssinaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadePrecoAssinaturaPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadePrecoAssinaturaPage
  ]
})
export class ListaOportunidadePrecoAssinaturaPageModule { }
