
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadeGenericaPageBase } from './lista-oportunidade-generica-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-generica',
  templateUrl: 'lista-oportunidade-generica.html'
})
export class ListaOportunidadeGenericaPage extends ListaOportunidadeGenericaPageBase {

  inicializacao() {
    //this.fcmSrv.testaDevice();
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
  	protected storage: Storage, protected fcmSrv: AcessaFcmService) {
    super(navCtrl,srv,storage, fcmSrv);
  }


  protected getFiltro(): LoopBackFilter {
    return {
      "order" : "dataUltimaPrecoAnterior DESC"
    };
  }

  top50( oportunidade: OportunidadeDia) : boolean{
    return oportunidade.posicaoProduto <= 50;
  }
  
}
