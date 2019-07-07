import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLojasPage } from './lista-lojas';

@NgModule({
  declarations: [
    ListaLojasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLojasPage),
  ],
})
export class ListaLojasPageModule {}
