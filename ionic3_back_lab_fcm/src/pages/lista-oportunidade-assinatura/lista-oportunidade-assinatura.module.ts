

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadeAssinaturaPage } from './lista-oportunidade-assinatura';

@NgModule({
  declarations: [
    ListaOportunidadeAssinaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadeAssinaturaPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadeAssinaturaPage
  ]
})
export class ListaOportunidadeAssinaturaPageModule { }
