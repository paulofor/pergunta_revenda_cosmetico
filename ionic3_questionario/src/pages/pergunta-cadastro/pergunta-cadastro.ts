import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteExperimental } from '../../app/shared/sdk';

/**
 * Generated class for the PerguntaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-cadastro',
  templateUrl: 'pergunta-cadastro.html',
})
export class PerguntaCadastroPage {

  cadastro: ClienteExperimental

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaCadastroPage');
  }

}
