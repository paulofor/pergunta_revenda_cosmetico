
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaOportunidadeGenericaPageBase } from './lista-oportunidade-generica-base';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Storage } from '@ionic/storage';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';


@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-generica',
  templateUrl: 'lista-oportunidade-generica.html'
})
export class ListaOportunidadeGenericaPage extends ListaOportunidadeGenericaPageBase {


  visitanteCorrente: Visitante = null;
  cookieValue = 'UNKNOWN';
  diasGratis;
  mostra = true;
  naoMostra = false;
  // Status Cliente
  periodoGratuito = true;
  assinante = false;

  inicializacao() {
    this.obtemDiasGratis();
  }

  constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
    protected storage: Storage, protected fcmSrv: AcessaFcmService, private usuarioSrv: UsuarioProdutoApi) {
    super(navCtrl, srv, storage, fcmSrv);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }

  top50(oportunidade: OportunidadeDia): boolean {
    return oportunidade.posicaoProduto <= 50;
  }

  inicioFluxo() {
    this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
  }

  obtemDiasGratis() {
    //alert('obtemDiasGratis()')
    this.storage.get("chave").then((chave) => {
      //alert('chaveObtemDiasGratis():' + chave);
      this.usuarioSrv.PeriodoGratuito(chave)
        .subscribe(
          (result) => {
            //alert('Result-ObtemDias: ' + JSON.stringify(result));
            if (result.dias <= 0) {
              this.diasGratis = "encerrado";
            } else {
              this.diasGratis = result.dias + ' dias';
            }
            this.periodoGratuito = this.verificaPeriodoGratuito(result);
            this.assinante = this.verificaAssinante(result);
          },
          (erro) => {
            //alert('Erro-ObtemDias: ' + JSON.stringify(erro));
            this.diasGratis = '20 dias';
          }
        )
    });
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
