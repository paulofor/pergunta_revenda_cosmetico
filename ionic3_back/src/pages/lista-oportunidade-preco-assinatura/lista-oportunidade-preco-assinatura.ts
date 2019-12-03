import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk/index';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { Storage } from '@ionic/storage';
import { ListaOportunidadeAssinaturaPageBase } from '../lista-oportunidade-assinatura/lista-oportunidade-assinatura-base';

/**
 * Generated class for the ListaOportunidadePrecoAssinaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-preco-assinatura',
  templateUrl: 'lista-oportunidade-preco-assinatura.html',
})
export class ListaOportunidadePrecoAssinaturaPage extends ListaOportunidadeAssinaturaPageBase{

  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';

  ID_VERSAOAPP = 999;


  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
		protected storage: Storage, protected fcmSrv: AcessaFcmService) {
         super(navCtrl,srv,storage, fcmSrv);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }

  top50( oportunidade: OportunidadeDia) : boolean{
    return oportunidade.posicaoProduto <= 50;
  }

  inicioFluxo() {
    this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
  }

}
