
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePageBase } from './lista-oportunidade-base';
import { OportunidadeDiaApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade',
  templateUrl: 'lista-oportunidade.html'
})
export class ListaOportunidadePage extends ListaOportunidadePageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,protected storage: Storage) {
    super(navCtrl,srv,storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
