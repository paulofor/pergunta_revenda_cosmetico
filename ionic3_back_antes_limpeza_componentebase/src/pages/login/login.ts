import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioApi, AcaoApi, Usuario } from '../../shared/sdk/index';
import { FormBuilder } from '@angular/forms';
import { LoginPageBase } from './login-base';
import { Storage } from '@ionic/storage';
import { Page } from 'ionic-angular/navigation/nav-util';
//import { ComandosZeroPage } from '../comandos-zero/comandos-zero';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { AcessaFcmService } from "../../servico/acessa-fcm-service";
import { ListaOportunidadePrecoAssinaturaPage } from '../lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { ListaOportunidadeGenericaPage } from '../lista-oportunidade-generica/lista-oportunidade-generica';
import { ListaOportunidadeGraficoIncPage } from '../lista-oportunidade-grafico-inc/lista-oportunidade-grafico-inc';
import { ListaOportunidadePrecoTabelaPage } from '../lista-oportunidade-preco-tabela/lista-oportunidade-preco-tabela';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends LoginPageBase {






  getPaginaInicial(): Page {
    var proxima = ListaOportunidadePrecoTabelaPage;
    console.log('Proxima: ' , proxima);
    return proxima;
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, 
    protected formBuilder: FormBuilder, protected srv: UsuarioProdutoApi, 
    protected srvACao: AcaoApi, protected storage: Storage, protected pagSeguro:PagSeguroApi,  protected fcmSrv: AcessaFcmService) {
    super(navCtrl, navParams, formBuilder, srv, srvACao, storage, pagSeguro, fcmSrv);
  }





}
