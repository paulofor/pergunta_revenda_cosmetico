import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntaCadastroPage } from './pergunta-cadastro';

@NgModule({
  declarations: [
    PerguntaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntaCadastroPage),
  ],
})
export class PerguntaCadastroPageModule {}
