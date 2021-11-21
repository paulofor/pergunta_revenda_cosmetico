import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VERSAO_APP_ID } from '../../app/const';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { DispositivoUsuarioApi } from '../../shared/sdk/services/custom/DispositivoUsuario';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { VisitaAppApi } from '../../shared/sdk/services/custom/VisitaApp';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { BaseComponente } from '../base-component/base-componente';
/**
 * Generated class for the PagSeguroAssinaturaSucessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-sucesso',
  templateUrl: 'pag-seguro-assinatura-sucesso.html',
})
export class PagSeguroAssinaturaSucessoPage extends BaseComponente{

  chavePagina = "4802fdf28ddc6301b2748af6a64ab5a136085f12";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private pagSrv: PagSeguroApi, protected storage:Storage, private usuarioSrv: UsuarioProdutoApi, protected fcm: FCM, protected device: Device,
    protected dispositivoUsuarioSrv: DispositivoUsuarioApi, protected visitaAppSrv: VisitaAppApi) {
      super(storage, fcm,device, dispositivoUsuarioSrv, visitaAppSrv)
  }
 
  dadosTela(chaveUsuario: any) {
    
  }
  getChavePagina() {
    return this.chavePagina;
  }




  iniciar() {
    /*
    this.navCtrl.push(ListaOportunidadePrecoAssinaturaPage).then(() => {
      console.log('Tamanho: ' , this.navCtrl.length());
      console.log('this.navCtrl:' , this.navCtrl);
      let index = 1;
      this.navCtrl.remove(0,this.navCtrl.length()-1);
    });
    */
  }
}


