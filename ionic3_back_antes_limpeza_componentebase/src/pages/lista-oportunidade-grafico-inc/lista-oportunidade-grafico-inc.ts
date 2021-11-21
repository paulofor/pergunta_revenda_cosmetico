import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';
import { OportunidadeDiaApi, LoopBackFilter, OportunidadeDia } from '../../shared/sdk';
import { Visitante } from '../../shared/sdk/models/Visitante';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { ListaOportunidadeGraficoIncPageBase } from './lista-oportunidade-grafico-inc-base';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ListaOportunidadeGraficoIncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-oportunidade-grafico-inc',
  templateUrl: 'lista-oportunidade-grafico-inc.html',
})
export class ListaOportunidadeGraficoIncPage extends ListaOportunidadeGraficoIncPageBase {

  public rotulos: string[];
  public dados: any[];

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
