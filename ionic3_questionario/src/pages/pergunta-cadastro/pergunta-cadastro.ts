import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteExperimental, ClienteExperimentalApi, Visitante } from '../../app/shared/sdk';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PerguntaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-cadastro',
  templateUrl: 'pergunta-cadastro.html',
})
export class PerguntaCadastroPage {

  exibeForm: boolean = true;
  exibeAgradecimento: boolean = false;



  // React
  cadastroForm: FormGroup;
  cadastro: ClienteExperimental;
  submitted: boolean = false;

  visitante: Visitante;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: ClienteExperimentalApi,
    private fb: FormBuilder, protected storage: Storage) {
    this.criaForm();
    this.carregaVisitante();

  }

  carregaVisitante () {
    this.storage.get('user').then((val: Visitante) => {
      this.visitante = val;
    })
  }

  get frm() { return this.cadastroForm.controls; }

  criaForm() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      tempoDisponivel: ['', Validators.required],
      faixaEtaria: ['', Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaCadastroPage');
  }

  submit(value: any) {
    this.submitted = true;
    // Stop if the form validation has failed
    if (this.cadastroForm.invalid) {
      return;
    }
    this.cadastro = this.cadastroForm.value;
    this.cadastro.visitanteId = this.visitante.id;
    this.cadastro.versaoAppId = this.visitante.versaoAppId;
    console.log('Model: ', this.cadastro);
    this.srv.create(this.cadastro)
      .subscribe((result: ClienteExperimental) => {
        this.exibeForm = false;
        this.exibeAgradecimento = true;
        this.cadastroForm.reset();
      })
  }

}
