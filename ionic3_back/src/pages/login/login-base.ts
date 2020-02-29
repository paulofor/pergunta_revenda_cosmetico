import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Usuario, UsuarioApi, LoopBackFilter, AcaoApi, Acao } from '../../shared/sdk';
import { Page } from 'ionic-angular/navigation/nav-util';
import { MSG_SEM_INTERNET, MSG_ERRO_LOGIN, VERSAO_APP_ID } from '../../app/const';
import { SignupPage } from '../signup/signup';
import { ComponenteBase } from '../componente-base';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { AcessaFcmService } from "../../servico/acessa-fcm-service";
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';


export abstract class LoginPageBase extends ComponenteBase {

  protected usuario: Usuario;
  private usuarioLogado: Usuario;
  protected loginForm: FormGroup;
  protected erroMsg: string;

  abstract getPaginaInicial(): Page;

  chavePagina = '079053c61df3fa29a8c281c38a8a06d0526499f5';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    protected formBuilder: FormBuilder, protected srv: UsuarioProdutoApi, protected srvAcao: AcaoApi, protected storage: Storage
    , protected pagSeguro: PagSeguroApi, protected fcmSrv: AcessaFcmService) {
    super();
    this.loginForm = this.formBuilder.group({
      login: '',
      senha: ''
    });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
    this.fcmSrv.registraVisitaPagina(this.chavePagina, VERSAO_APP_ID);
  }

  
  onSubmit() {
    var email = this.loginForm.get("login").value;
    var senha = this.loginForm.get("senha").value;
    var filtro: LoopBackFilter = {
      'where': { 'and': [{ 'email': email }, { 'senha': senha }] }
    }
    this.srv.ValidaLogin(email, senha)
      .subscribe(
        (result: Usuario) => {
          if (result) {
            console.log('UserLogin: ', result);
            this.usuarioLogado = result;
            //this.executouLogin();
            this.verificaAssinatura();
          } else {
            this.erroMsg = MSG_ERRO_LOGIN;
            //this.errouLogin();
          }

        },
        (erro: any) => {
          console.log('Erro login: ', erro);
          if (erro == 'Server error') {
            this.erroMsg = MSG_SEM_INTERNET;
          } else {
            this.erroMsg = MSG_ERRO_LOGIN;
          }
        }
      )
  }

  armazenaUsuarioESegue() {
    this.storage.set("user", this.usuarioLogado).then((successData) => {
      this.mudaTela();
    })
  }

  executouLogin() {
    let acao: Acao = new Acao();
    acao.dataHora = new Date();
    acao.nome = 'LoginOk';
    acao.usuarioId = this.usuarioLogado.id;
    acao.objeto = 'Login';
    console.log('Acao: ', JSON.stringify(acao));
    this.srvAcao.create(acao)
      .subscribe(result => {
        console.log('Result: ', result);
      })
  }

  errouLogin() {
    let acao: Acao = new Acao();
    acao.dataHora = new Date();
    acao.nome = 'LoginErro';
    //acao.usuarioId = usuario.id;
    acao.objeto = 'Login';
    console.log('Acao: ', JSON.stringify(acao));
    this.srvAcao.create(acao)
      .subscribe(result => {
        console.log('Result: ', result);
      })
  }

  mudaTela() {
    this.navCtrl.push(this.getPaginaInicial()).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
    });
  }

  criarConta() {
    this.navCtrl.push(SignupPage);
  }


  verificaAssinatura() {
    console.log('CodigoPagamento:', this.usuarioLogado.codigoPagamento);
    if (this.usuarioLogado.codigoPagamento) {
      this.pagSeguro.VerificaPagamento(this.usuarioLogado.codigoPagamento)
        .subscribe((result) => {
          console.log('VerificaPagamento: ', result);
          this.usuarioLogado.statusPagamento = result.status;
          this.armazenaUsuarioESegue();
        })
    } else {
      this.armazenaUsuarioESegue();
    }
  }

}
