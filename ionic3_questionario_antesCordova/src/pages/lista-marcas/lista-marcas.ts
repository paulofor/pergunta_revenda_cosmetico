import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostaVersao, RespostaVersaoApi, Visitante } from '../../app/shared/sdk/index';
import { ListaLojasPage } from '../lista-lojas/lista-lojas';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListaMarcasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-marcas',
  templateUrl: 'lista-marcas.html',
})
export class ListaMarcasPage {

  respostaMarcas: RespostaVersao = new RespostaVersao();
  marca1: String;
  marca2: String;
  marca3: String;
  marca4: String;
  marca5: String;

  marca1txt: String;
  marca2txt: String;
  marca3txt: String;
  marca4txt: String;
  marca5txt: String;

  visitante: Visitante;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi, protected storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMarcasPage');
    this.respostaMarcas.pergunta = 'Suas marcas preferidas';
    this.carregaVisitante();
  }

  carregaVisitante () {
    this.storage.get('user').then((val: Visitante) => {
      this.visitante = val;
    })
  }

  submit() {
    console.log('Chamou submit');
    this.respostaMarcas.resposta = this.marca1txt + ' , ' + this.marca2txt + ' , ' + this.marca3txt + ' , ' + this.marca4txt + ' , ' + this.marca5txt;
    this.respostaMarcas.visitanteId = this.visitante.id;
    this.respostaMarcas.versaoAppId = this.visitante.versaoAppId;
    this.srv.create(this.respostaMarcas)
      .subscribe((resultado) => {
        console.log('Resultado Marcas: ', resultado);
      });
    this.navCtrl.push(ListaLojasPage, {
    })
  }


}
