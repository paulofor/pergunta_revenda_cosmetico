
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { VERSAO_APP_ID } from './const';



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
  			 ) {
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

 


}