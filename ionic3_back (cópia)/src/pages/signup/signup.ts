import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPageBase } from './signup-base';
import { FormBuilder } from '@angular/forms';
import { UsuarioApi } from '../../shared/sdk/index';
import { Storage } from '@ionic/storage';
import { AcessaFcmService } from "../../servico/acessa-fcm-service";
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage extends SignupPageBase{

  tipo = 'password';
  passwordCheckbox

  constructor(public navCtrl: NavController, protected formBuilder: FormBuilder, protected storage:Storage, 
  			protected srv: UsuarioProdutoApi,  protected fcmSrv: AcessaFcmService) {
    super(navCtrl, formBuilder, storage, srv, fcmSrv);
  }


  mudaStatusSenha() {
    console.log('Status: ' , this.passwordCheckbox);
    if (this.passwordCheckbox) {
      this.tipo = 'text'
    } else {
      this.tipo = 'password';
    }
  }

}
