
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePrecoPageBase } from './lista-oportunidade-preco-base';
import { OportunidadeDiaApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { Visitante } from '../../shared/sdk/models/Visitante';


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

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,protected storage: Storage) {
    super(navCtrl,srv,storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
