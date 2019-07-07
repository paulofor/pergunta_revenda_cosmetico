import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMarcasPage } from './lista-marcas';

@NgModule({
  declarations: [
    ListaMarcasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMarcasPage),
  ],
})
export class ListaMarcasPageModule {}
