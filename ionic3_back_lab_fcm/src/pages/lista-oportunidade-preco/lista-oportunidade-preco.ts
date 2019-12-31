
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePrecoPageBase } from './lista-oportunidade-preco-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';



@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-preco',
  templateUrl: 'lista-oportunidade-preco.html'
})
export class ListaOportunidadePrecoPage extends ListaOportunidadePrecoPageBase {

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
