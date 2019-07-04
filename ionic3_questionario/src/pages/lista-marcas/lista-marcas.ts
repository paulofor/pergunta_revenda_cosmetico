import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostaVersao, RespostaVersaoApi } from '../../app/shared/sdk/index';

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
  marca1:String;
  marca2:String;
  marca3:String;
  marca4:String;
  marca5:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMarcasPage');
    this.respostaMarcas.pergunta = 'Suas marcas preferidas';
  }

  enviaResposta(){
    
  }



}
