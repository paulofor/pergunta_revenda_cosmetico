
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AcessaFcmService } from '../servico/acessa-fcm-service';
import { VERSAO_APP_ID } from './const';

import { ListaOportunidadePage } from '../pages/lista-oportunidade/lista-oportunidade';
import { ListaOportunidadePrecoPage } from '../pages/lista-oportunidade-preco/lista-oportunidade-preco';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  				private fcmSrv:AcessaFcmService ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.fcmSrv.executaValidacaoFake(VERSAO_APP_ID);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}