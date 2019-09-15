import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerguntaCadastro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-cadastro2',
  templateUrl: 'pergunta-cadastro2.html',
})
export class PerguntaCadastro2Page {

  exibeForm: boolean = true;
  exibeAgradecimento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaCadastro2Page');
  }

}
