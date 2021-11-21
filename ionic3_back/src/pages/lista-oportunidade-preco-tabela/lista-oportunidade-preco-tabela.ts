
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadePrecoTabelaPageBase } from './lista-oportunidade-preco-tabela-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';

import { Storage } from '@ionic/storage';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { MSG_SEM_INTERNET } from '../../app/const';
import { DispositivoUsuarioApi } from '../../shared/sdk/services/custom/DispositivoUsuario';
import { VisitaAppApi } from '../../shared/sdk/services/custom/VisitaApp';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-preco-tabela',
  templateUrl: 'lista-oportunidade-preco-tabela.html'
})
export class ListaOportunidadePrecoTabelaPage extends ListaOportunidadePrecoTabelaPageBase {

 

  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';
  diasGratis;
  mostra = true;
  naoMostra = false;
  // Status Cliente
  periodoGratuito = true;
  assinante = false;



  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
          protected storage: Storage, protected fcm: FCM, protected device: Device, private usuarioSrv: UsuarioProdutoApi,
          protected dispositivoUsuarioSrv: DispositivoUsuarioApi, protected visitaAppSrv: VisitaAppApi) {
      super(storage, fcm, device,dispositivoUsuarioSrv,visitaAppSrv)
  }

  /* ** NOVOS **/
  dadosTela(chave) {
    console.log('-> dadosTela');
    this.obtemDadosUsuario(chave);
    this.obtemPeriodoGratis(chave);
  }
  obtemDadosUsuario(chave) {
    console.log('-> obtemDadosUsuario');
    this.srv.ListaApp()
        .subscribe((resultado: OportunidadeDia[]) => {
          this.preencheDadoTela(resultado);

        },
      (erro: any) => {
        if (erro == 'Server error') {
          this.erroMsg = MSG_SEM_INTERNET;
        }
      })
  }
  preencheDadoTela(lista) {
		console.log('-> preencheDadoTela');
		this.listaItem = lista;
		this.erroMsg = '';
	  	console.log('-> preencheDadoTela.final')
	}

	obtemPeriodoGratis(chave) {
		console.log('-> obtemPeriodoGratis');
    this.usuarioSrv.PeriodoGratuito(chave)
    . subscribe(
      (result) => {
       this.preencheDadoGratis(result);
      },
      (erro) => {
        this.diasGratis = '20 dias';
      }
    )

	}
	preencheDadoGratis(result) {
		console.log('-> preencheDadoGratis');
    if (result.dias <= 0) {
      this.diasGratis = 'encerrado'
    } else {
      this.diasGratis = result.dias + ' dias';
    }
    this.periodoGratuito = this.verificaPeriodoGratuito(result);
    this.assinante = this.verificaAssinante(result);
    console.log('-> preencheDadoGratis.final');
	}

  /** FINAL NOVOS */

  protected getFiltro(): LoopBackFilter {
    return {};
  }

  top50(oportunidade: OportunidadeDia): boolean {
    return oportunidade.posicaoProduto <= 50;
  }

  inicioFluxo() {
    this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
  }

 

  verificaPeriodoGratuito(result: any): boolean {
    if (result.dias > 0) {
      return true;
    } else {
      return false;
    }
  }
  verificaAssinante(resultado: any): boolean {
    let saida = false;
    if (resultado.status == 'ACTIVE') saida = true;
    return saida;
  }
  
}
