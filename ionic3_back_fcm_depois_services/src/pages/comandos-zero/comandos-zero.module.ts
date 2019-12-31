import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComandosZeroPage } from './comandos-zero';

@NgModule({
  declarations: [
    ComandosZeroPage,
  ],
  imports: [
    IonicPageModule.forChild(ComandosZeroPage),
  ],
})
export class ComandosZeroPageModule {}
