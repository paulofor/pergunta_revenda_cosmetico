import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario, UsuarioApi } from "../../shared/sdk/index";
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';
import { ComandosZeroPage } from "../comandos-zero/comandos-zero";
import { ComponenteBase } from '../componente-base';
import { MSG_CADASTRO_TAMANHO_SENHA, MSG_CADASTRO_EMAIL } from "../../app/const";
import { UsuarioProdutoApi } from "../../shared/sdk/services/custom/UsuarioProduto";


export abstract class SignupPageBase extends ComponenteBase{

  protected usuario: Usuario;
  protected signupForm: FormGroup;
  protected erroMsg: string;
  protected enviando: boolean;
  
  protected msgSenha:string = MSG_CADASTRO_TAMANHO_SENHA;
  protected msgEmail:string = MSG_CADASTRO_EMAIL;

  constructor(public navCtrl: NavController, protected formBuilder: FormBuilder, protected storage: Storage, protected srv: UsuarioProdutoApi) {
    super();
    this.signupForm = this.formBuilder.group({
      login: ['', Validators.email],
      senha1: ['' , Validators.compose( [Validators.minLength(8) , Validators.required]) ] ,
      senha2: ['', Validators.compose( [Validators.minLength(8) , Validators.required]) ]
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }
  
  ionViewWillEnter() {
    console.log('');
    console.log('Tela: SignupPage');
  }

  verificado(): boolean {
    let saida = (this.signupForm.get('login').valid) &&
      (this.signupForm.get('senha1').valid) &&
      (this.signupForm.get('senha2').valid);
    return saida;
  }

  onSubmit() {
    if (this.verificado()) {
      this.processaSubmit();
    }
  }

  registraLogin(login, senha) {
    
  }


  processaSubmit() {
    let email = this.signupForm.get("login").value;
    let senha1 = this.signupForm.get("senha1").value;
    let senha2 = this.signupForm.get("senha2").value;
    if (senha1!=senha2) {
      this.erroMsg = 'Senhas diferentes';
      return;
    } else {
      this.registraLogin(email, senha1);      
    }
  }

}
