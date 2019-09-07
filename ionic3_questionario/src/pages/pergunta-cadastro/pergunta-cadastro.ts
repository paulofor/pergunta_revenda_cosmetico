import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteExperimental, ClienteExperimentalApi } from '../../app/shared/sdk';
import { FormGroup, FormControl } from '@angular/forms';

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

  exibeForm: boolean = true;
  exibeAgradecimento: boolean = false;

  cadastro: ClienteExperimental = new ClienteExperimental();
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv:ClienteExperimentalApi) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaCadastroPage');
  }

  submit() {
    console.log('Model: ' , this.cadastro);
    this.srv.create(this.cadastro)
      .subscribe((result:ClienteExperimental) => {
        this.exibeForm = false;
        this.exibeAgradecimento = true;  
      })
  }

}
