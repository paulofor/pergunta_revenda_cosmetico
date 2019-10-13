
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePrecoPageBase } from './lista-oportunidade-preco-base';
import { OportunidadeDiaApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-preco',
  templateUrl: 'lista-oportunidade-preco.html'
})
export class ListaOportunidadePrecoPage extends ListaOportunidadePrecoPageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,protected storage: Storage) {
    super(navCtrl,srv,storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
