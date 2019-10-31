
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadeAssinaturaPageBase } from './lista-oportunidade-assinatura-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';
import { Visitante } from '../../shared/sdk/models/Visitante';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-assinatura',
  templateUrl: 'lista-oportunidade-assinatura.html'
})
export class ListaOportunidadeAssinaturaPage extends ListaOportunidadeAssinaturaPageBase {

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
  
}
