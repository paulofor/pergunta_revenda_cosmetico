import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMarcasPage } from '../lista-marcas/lista-marcas';

/**
 * Generated class for the PerguntaRevendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-revenda',
  templateUrl: 'pergunta-revenda.html',
})
export class PerguntaRevendaPage {

  exibeQuadro1: boolean = true;
  exibeQuadro2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaRevendaPage');
  }

  respostaSim1() {
    console.log('Resposta Sim 1');
    this.mudaTela();
  }

  respostaNao1() {
    console.log('Resposta Não 1');
    this.exibeQuadro2 = true;
  }

  respostaSim2() {
    console.log('Resposta Sim 2');
    this.mudaTela();
  }

  respostaNao2() {
    console.log('Resposta Não 2');
    this.mudaTela();
  }

  mudaTela() {
    this.navCtrl.push(ListaMarcasPage, {
    })
  }

  
}
