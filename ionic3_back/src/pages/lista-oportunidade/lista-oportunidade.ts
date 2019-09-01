
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePageBase } from './lista-oportunidade-base';
import { OportunidadeDiaApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { CookieService } from 'ngx-cookie-service';
import { VisitanteApi } from '../../shared/sdk/services/custom/Visitante';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { FCM } from '@ionic-native/fcm';

@IonicPage()
@Component({
  selector: 'page-lista-oportunidade',
  templateUrl: 'lista-oportunidade.html'
})
export class ListaOportunidadePage extends ListaOportunidadePageBase {

  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';

  ID_VERSAOAPP = 4;

  inicializacao() {
    this.trataCookie();

  }


  private obtemToken1() {
    var token = '2156432135435125647561'
    console.log('Token fake: ', token);
    this.visitanteCorrente.fcmToken = token;
    this.visitanteCorrente.dataHoraNotificacao = new Date();
    this.visitanteSrv.atualizaItem(this.visitanteCorrente.id, this.visitanteCorrente)
      .subscribe((resultado: any) => {
        console.log('Resultado:', resultado);
      })
  }


  


  private obtemToken() {
    this.fcm.subscribeToTopic('all');
    //alert('inscreveu');
    this.fcm.getToken().then(token => {
      //alert(token);
      localStorage.setItem('token', token);
      this.visitanteCorrente.fcmToken = token;
      this.visitanteCorrente.dataHoraNotificacao = new Date();
      //alert(JSON.stringify(this.visitanteCorrente));
      this.visitanteSrv.atualizaItem(this.visitanteCorrente.id, this.visitanteCorrente)
        .subscribe(
          (resultado: any) => {
            //alert('Sucesso:' + JSON.stringify(resultado))
          },
          (erro: any) => {
            //alert('Erro:' + JSON.stringify(erro))
          });
    });
    this.fcm.onNotification().subscribe(data => {
      alert('Recebu notificacao')
      if (data.wasTapped) {
        //alert('background');
      } else {
        //alert('foreground');
      }
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      //alert('token')
    });

  }



  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
    private cookieService: CookieService, private visitanteSrv: VisitanteApi, protected storage: Storage, private fcm: FCM) {
    super(navCtrl, srv, storage);
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
        this.obtemToken();
      })
  }

}
