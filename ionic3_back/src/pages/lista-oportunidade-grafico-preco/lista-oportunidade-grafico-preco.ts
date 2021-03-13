
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadeGraficoPrecoPageBase } from './lista-oportunidade-grafico-preco-base';
import { OportunidadeDiaApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-grafico-preco',
  templateUrl: 'lista-oportunidade-grafico-preco.html'
})
export class ListaOportunidadeGraficoPrecoPage extends ListaOportunidadeGraficoPrecoPageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi, protected fcmSrv: AcessaFcmService,protected storage: Storage) {
    super(navCtrl,srv,storage,fcmSrv);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
