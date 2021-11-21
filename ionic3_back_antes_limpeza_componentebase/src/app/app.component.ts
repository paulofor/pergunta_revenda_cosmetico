
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AcessaFcmService } from '../servico/acessa-fcm-service';
import { VERSAO_APP_ID } from './const';

import { ListaOportunidadePage } from '../pages/lista-oportunidade/lista-oportunidade';
import { ListaOportunidadePrecoPage } from '../pages/lista-oportunidade-preco/lista-oportunidade-preco';
import { ListaOportunidadeAssinaturaPage } from '../pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura';
import { ListaOportunidadeGenericaPage } from '../pages/lista-oportunidade-generica/lista-oportunidade-generica';
import { ListaOportunidadePrecoAssinaturaPage } from '../pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura';
import { ListaOportunidadeGraficoPrecoPage } from '../pages/lista-oportunidade-grafico-preco/lista-oportunidade-grafico-preco';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ListaOportunidadePrecoTabelaPage } from '../pages/lista-oportunidade-preco-tabela/lista-oportunidade-preco-tabela';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = LoginPage;
  rootPage: any = ListaOportunidadePrecoTabelaPage;

  pages: Array<{title: string, component: any}>;
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  				private fcmSrv:AcessaFcmService ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('*** initializeApp');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(2000).subscribe(() => {
        this.showSplash = false;
        console.log('*** acabouSplah')
      })
    });
  }

  openPage(page) {
    console.log('*** openPage')
    this.nav.push(page.component);
  }


}