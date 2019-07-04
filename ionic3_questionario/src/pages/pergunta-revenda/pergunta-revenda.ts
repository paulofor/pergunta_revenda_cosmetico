import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMarcasPage } from '../lista-marcas/lista-marcas';
import { RespostaVersao, RespostaVersaoApi } from '../../app/shared/sdk/index';

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

  resposta1: RespostaVersao = new RespostaVersao();
  resposta2: RespostaVersao = new RespostaVersao();

  textoPergunta1 = 'Você trabalhar com revenda de cosméticos atualmente ?';
  textoPergunta2 = 'Tem interesse em revender ?';

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaRevendaPage');
    this.resposta1.pergunta = this.textoPergunta1;
    this.resposta2.pergunta = this.textoPergunta2;
  }

  respostaSim1() {
    console.log('Resposta Sim 1');
    this.resposta1.resposta = 'sim';
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.mudaTela();
  }

  respostaNao1() {
    console.log('Resposta Não 1');
    this.resposta1.resposta = 'nao';
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibeQuadro2 = true;
  }

  respostaSim2() {
    console.log('Resposta Sim 2');
    this.resposta2.resposta = 'sim';
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim2: ', result);
      });
    this.mudaTela();
  }

  respostaNao2() {
    console.log('Resposta Não 2');
    this.resposta2.resposta = 'nao';
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim2: ', result);
      });
    this.mudaTela();
  }

  mudaTela() {
    this.navCtrl.push(ListaMarcasPage, {
    })
  }


}
