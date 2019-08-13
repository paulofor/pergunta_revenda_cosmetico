


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { OportunidadeDia, OportunidadeDiaApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-lista-oportunidade',
  templateUrl: 'lista-oportunidade.html'
})
export class ListaOportunidadePage {
  listaItem: OportunidadeDia[];

  constructor(public navCtrl: NavController, public srv: OportunidadeDiaApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ListaOportunidadePage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ListaOportunidadePage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: OportunidadeDia[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'ListaOportunidadePage');
  }

  
}
