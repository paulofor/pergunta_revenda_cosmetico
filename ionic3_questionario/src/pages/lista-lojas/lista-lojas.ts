import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostaVersao, Visitante, RespostaVersaoApi } from '../../app/shared/sdk';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListaLojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-lojas',
  templateUrl: 'lista-lojas.html',
})
export class ListaLojasPage {

  respostaLojas: RespostaVersao = new RespostaVersao();
  loja1: String;
  loja2: String;
  loja3: String;
  loja4: String;
  loja5: String;

  loja1txt: String;
  loja2txt: String;
  loja3txt: String;
  loja4txt: String;
  loja5txt: String;

  visitante: Visitante;

  exibeForm: boolean = true;
  exibeAgradecimento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi, protected storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMarcasPage');
    this.respostaLojas.pergunta = 'Suas lojas preferidas';
    this.carregaVisitante();
  }

  carregaVisitante () {
    this.storage.get('user').then((val: Visitante) => {
      this.visitante = val;
    })
  }

  submit() {
    console.log('Chamou submit');
    this.respostaLojas.resposta = this.loja1txt + ' , ' + this.loja2txt + ' , ' + this.loja3txt + ' , ' + this.loja4txt + ' , ' + this.loja5txt;
    this.respostaLojas.visitanteId = this.visitante.id;
    this.srv.create(this.respostaLojas)
      .subscribe((resultado) => {
        console.log('Resultado Lojas: ', resultado);
      });
    this.exibeForm = false;
    this.exibeAgradecimento = true;
  }


}
