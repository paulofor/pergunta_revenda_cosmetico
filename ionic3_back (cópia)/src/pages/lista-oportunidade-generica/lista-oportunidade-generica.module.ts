

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaOportunidadeGenericaPage } from './lista-oportunidade-generica';

@NgModule({
  declarations: [
    ListaOportunidadeGenericaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOportunidadeGenericaPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaOportunidadeGenericaPage
  ]
})
export class ListaOportunidadeGenericaPageModule { }
