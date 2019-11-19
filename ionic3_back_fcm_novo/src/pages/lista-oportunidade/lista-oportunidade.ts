
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePageBase } from './lista-oportunidade-base';
import { OportunidadeDiaApi, LoopBackFilter} from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { CookieService } from 'ngx-cookie-service';
import { VisitanteApi } from '../../shared/sdk/services/custom/Visitante';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';

@IonicPage()
@Component({
  selector: 'page-lista-oportunidade',
  templateUrl: 'lista-oportunidade.html'
})
export class ListaOportunidadePage extends ListaOportunidadePageBase {

  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';

  ID_VERSAOAPP = 3;

  inicializacao() {
    this.trataCookie();
    this.firebaseMessaging.subscribe('maisNovo');

  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
    private cookieService: CookieService, private visitanteSrv: VisitanteApi, protected storage: Storage,
    private firebaseMessaging: FirebaseMessaging) {
    super(navCtrl,srv,storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }

  trataCookie() {
    this.cookieValue = this.cookieService.get('idDigicom');
    console.log('Cookie: ', this.cookieValue);
    if (!this.cookieValue) {
      console.log('Cookie vazio');
      this.visitanteSrv.proximoCookie()
        .subscribe((result: any) => {
          console.log('Result Cookie: ', result);
          this.cookieService.set('idDigicom', result.codigoCookie);
          this.cookieValue = result.codigoCookie;
          this.registraVisita();
        })
    } else {
      console.log('Meu Cookie:', this.cookieValue);
      this.registraVisita();
    }
  }

  registraVisita() {
    let visita = new Visitante();
    visita.codigoCookie = this.cookieValue;
    visita.versaoAppId = this.ID_VERSAOAPP;
    console.log('Visita: ', visita);
    this.visitanteSrv.criaItem(visita)
      .subscribe((resultado: any) => {
        console.log('Resultado visitante: ', resultado);
        this.visitanteCorrente = resultado;
      })
  }
  
}
