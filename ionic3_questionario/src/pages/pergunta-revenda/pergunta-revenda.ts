import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMarcasPage } from '../lista-marcas/lista-marcas';
import { RespostaVersao, RespostaVersaoApi, VisitanteApi, Visitante } from '../../app/shared/sdk/index';
import { CookieService } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';
import { PerguntaCadastroPage } from '../pergunta-cadastro/pergunta-cadastro';
/**
 * Generated class for the PerguntaRevendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-revenda',
  templateUrl: 'pergunta-revenda.html',
})
export class PerguntaRevendaPage {

  ID_VERSAOAPP = 999;

  exibeQuadro1: boolean = true;
  exibeQuadro2: boolean = false;

  resposta1: RespostaVersao = new RespostaVersao();
  resposta2: RespostaVersao = new RespostaVersao();

  textoPergunta1 = 'Você trabalha com revenda de cosméticos atualmente ?';
  textoPergunta2 = 'Tem interesse em revender ?';

  cookieValue = 'UNKNOWN';
  visitanteCorrente: Visitante = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi, 
    private cookieService: CookieService,
    private visitanteSrv: VisitanteApi, protected storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaRevendaPage');
    this.resposta1.pergunta = this.textoPergunta1;
    this.resposta2.pergunta = this.textoPergunta2;
    this.resposta1.versaoAppId = this.ID_VERSAOAPP;
    this.resposta2.versaoAppId = this.ID_VERSAOAPP;
    this.trataCookie();
  }

  respostaSim1() {
    console.log('Resposta Sim 1');
    this.resposta1.resposta = 'sim';
    this.resposta1.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.mudaTela();
  }

  respostaNao1() {
    console.log('Resposta Não 1');
    this.resposta1.resposta = 'nao';
    this.resposta1.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibeQuadro2 = true;
  }

  respostaSim2() {
    console.log('Resposta Sim 2');
    this.resposta2.resposta = 'sim';
    this.resposta2.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim2: ', result);
      });
    this.mudaTela();
  }

  respostaNao2() {
    console.log('Resposta Não 2');
    this.resposta2.resposta = 'nao';
    this.resposta2.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim2: ', result);
      });
    this.mudaTela();
  }

  mudaTela() {
    this.storage.set("user",this.visitanteCorrente).then((successData)=>{
      this.navCtrl.push(PerguntaCadastroPage, {
      })
    })
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
    this.visitanteSrv.create(visita)
      .subscribe((resultado: any) => {
        console.log('Resultado visitante: ', resultado);
        this.visitanteCorrente = resultado;
      })
  }




}
