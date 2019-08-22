
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListaOportunidadePage } from '../pages/lista-oportunidade/lista-oportunidade';
import { timer } from 'rxjs/observable/timer';
import { FCM } from '@ionic-native/fcm';
import { Visitante } from '../shared/sdk/models/Visitante';
import { VisitanteApi } from '../shared/sdk/services/custom/Visitante';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListaOportunidadePage;

  pages: Array<{ title: string, component: any }>;
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private fcm: FCM, private visitanteSrv: VisitanteApi) {
    this.initializeApp();

    this.pages = [

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }



}
