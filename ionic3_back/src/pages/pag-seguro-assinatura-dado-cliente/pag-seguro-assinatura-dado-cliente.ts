import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../shared/assinatura';
import { PagSeguroAssinaturaDadoCartaoPage } from '../pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';

/**
 * Generated class for the PagSeguroAssinaturaDadoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-cliente',
  templateUrl: 'pag-seguro-assinatura-dado-cliente.html',
})
export class PagSeguroAssinaturaDadoClientePage {

  erroRua: string;
  erroNumero: string;
  erroComplemento: string;
  erroEstado: string;
  erroCidade: string;
  erroBairro: string;
  erroCep: string;



  address = {
    "street": "",
    "number": "",
    "complement": "",
    "district": "",
    "city": "",
    "state": "",
    "country": "BRA",
    "postalCode": ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Assinatura:', Assinatura.sender.address.street);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoClientePage');
    this.address = Assinatura.sender.address;
  }

  avancar() {
    if (this.validacao()) {
      this.navCtrl.push(PagSeguroAssinaturaDadoCartaoPage);
    }
  }
  voltar() {
    this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
  }

  preencher() {
    this.address.street = 'Rua Antonio Basilio';
    this.address.number = '204';
    this.address.complement = 'apt. 805';
    this.address.district = 'Tijuca';
    this.address.city = 'Rio de Janeiro';
    this.address.state = 'RJ';
    this.address.postalCode = '20511190';
  }


  validacao(): boolean {
    let saida = true;
    if (!this.address.street) {
      this.erroNome = "Coloque seu nome";
      saida = false;
    } else {
      this.erroNome = null;
    }
    if (!this.address.number) {
      this.erroEmail = "Coloque seu email";
      saida = false;
    } else {
      this.erroEmail = null;
    }
    if (! this.address.complement) {
      this.erroTelDDD = "Coloque o DDD do seu telefone";
      saida = false;
    } else {
      this.erroTelDDD = null;
    }
    if (!this.address.district) {
      this.erroTelNumero = "Coloque seu número de telefone";
      saida = false;
    } else {
      this.erroTelNumero = null;
    }
    if (!this.address.city) {
      this.erroCpf = "Coloque seu cpf";
      saida = false;
    } else {
      this.erroCpf = null;
    }
    if (! this.address.state) {
      this.erroNascimento = "Coloque sua data de nascimento";
      saida = false;
    } else {
      this.erroNascimento = null;
    }
    if (! this.address.postalCode) {
      this.erroNascimento = "Coloque sua data de nascimento";
      saida = false;
    } else {
      this.erroNascimento = null;
    }
    return saida;
  }
}
