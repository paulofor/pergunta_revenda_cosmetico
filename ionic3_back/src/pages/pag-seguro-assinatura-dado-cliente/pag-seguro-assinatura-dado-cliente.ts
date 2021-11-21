import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../shared/assinatura';
import { PagSeguroAssinaturaDadoCartaoPage } from '../pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';

import { VERSAO_APP_ID } from '../../app/const';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { DispositivoUsuarioApi } from '../../shared/sdk/services/custom/DispositivoUsuario';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { VisitaAppApi } from '../../shared/sdk/services/custom/VisitaApp';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { BaseComponente } from '../base-component/base-componente';
/**
 * Generated class for the PagSeguroAssinaturaDadoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-cliente',
  templateUrl: 'pag-seguro-assinatura-dado-cliente.html',
})
export class PagSeguroAssinaturaDadoClientePage extends BaseComponente{

  dadosTela(chaveUsuario: any) {
    //throw new Error('Method not implemented.');
  }
  getChavePagina() {
    return this.chavePagina;
  }

  chavePagina = '7bd51c0887db867d7e6e91323fdecd1f88a8188e';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private pagSrv: PagSeguroApi, protected storage:Storage, private usuarioSrv: UsuarioProdutoApi, protected fcm: FCM, protected device: Device,
    protected dispositivoUsuarioSrv: DispositivoUsuarioApi, protected visitaAppSrv: VisitaAppApi) {
      super(storage, fcm,device, dispositivoUsuarioSrv, visitaAppSrv)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoClientePage');
    this.inicializacao();
  }

  inicializacao() {
    this.address = Assinatura.sender.address;
  }

  avancar() {
    if (this.validacao()) {
      this.navCtrl.push(PagSeguroAssinaturaDadoCartaoPage);
    }
  }
  voltar() {
    //this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
    this.navCtrl.pop();
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
      this.erroRua = "Coloque o nome da rua do seu endereço";
      saida = false;
    } else {
      this.erroRua = null;
    }
    if (!this.address.number) {
      this.erroNumero = "Coloque o número do seu endereço";
      saida = false;
    } else {
      this.erroNumero = null;
    }
    if (! this.address.complement) {
      this.erroComplemento = "Coloque o complemento do seu endereço";
      saida = false;
    } else {
      this.erroComplemento = null;
    }
    if (!this.address.district) {
      this.erroBairro = "Coloque o bairro do seu endereço";
      saida = false;
    } else {
      this.erroBairro = null;
    }
    if (!this.address.city) {
      this.erroCidade = "Coloque a cidade do seu endereço";
      saida = false;
    } else {
      this.erroCidade = null;
    }
    if (! this.address.state) {
      this.erroEstado = "Coloque o estado do seu endereço";
      saida = false;
    } else {
      this.erroEstado = null;
    }
    if (! this.address.postalCode) {
      this.erroCep = "Coloque o cep do seu endereço";
      saida = false;
    } else {
      this.erroCep = null;
    }
    return saida;
  }
}
