
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePageBase } from './lista-oportunidade-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { CookieService } from 'ngx-cookie-service';
import { VisitanteApi } from '../../shared/sdk/services/custom/Visitante';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { Firebase } from '@ionic-native/firebase/ngx';
import { DispositivoUsuarioApi } from '../../shared/sdk/services/custom/DispositivoUsuario';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';



@IonicPage()
@Component({
  selector: 'page-lista-oportunidade',
  templateUrl: 'lista-oportunidade.html'
})
export class ListaOportunidadePage extends ListaOportunidadePageBase {

  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';

  ID_VERSAOAPP = 999;

  //fcmSrv:AcessaFcmService;

  inicializacao() {
    this.trataCookie();
    //this.fcmSrv = new AcessaFcmService(this.fcm,this.dispositivoUsuarioSrv, this.visitanteSrv);
    //console.log('DispositivoSrv: ' , this.dispositivoUsuarioSrv);
    //this.fcmSrv.obtemTokenDispostivoUsuario();

  }




  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
    private cookieService: CookieService, private visitanteSrv: VisitanteApi, protected storage: Storage, private fcm: Firebase,
    private dispositivoUsuarioSrv: DispositivoUsuarioApi,protected fcmSrv:AcessaFcmService
   ) {
    super(navCtrl, srv, storage, fcmSrv);
  }


  protected getFiltro(): LoopBackFilter {
    return {'order' : 'posicaoProduto'};
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
        //this.srvToken.obtemToken(this.visitanteCorrente);
      })
  }

  top50( oportunidade: OportunidadeDia) : boolean{
    return oportunidade.posicaoProduto <= 50;
  }

}
