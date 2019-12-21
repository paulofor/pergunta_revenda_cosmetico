import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura, Cartao } from '../../shared/assinatura';

/**
 * Generated class for the PagSeguroAssinaturaConfirmacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-confirmacao',
  templateUrl: 'pag-seguro-assinatura-confirmacao.html',
})
export class PagSeguroAssinaturaConfirmacaoPage {


  assinatura : any;
  cartao : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaConfirmacaoPage');
    this.assinatura = Assinatura;
    this.cartao = Cartao;
  }

  getBandeira() : string {
    let saida = '';
    if (this.cartao.bandeira == 'visa') saida = 'Visa';
    if (this.cartao.bandeira == 'mastercard') saida = 'MasterCard';
    if (this.cartao.bandeira == 'diners') saida = 'Diners';
    return saida;
  }

  confirmar() {

  }
  voltar() {
    this.navCtrl.pop();
  }

}
