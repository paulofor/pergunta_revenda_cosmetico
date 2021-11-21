
import { OportunidadeDia, OportunidadeDiaApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET , VERSAO_APP_ID} from '../../app/const';
import { ComponenteBase } from '../componente-base';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';


// Tipo: LISTA_FIND_APP - Criado por: templates/ionic3/pages/lista-find-app/ListaFindAppPageProdBaseTs.javajet
export abstract class ListaOportunidadePrecoTabelaPageBase extends ComponenteBase{

     protected usuario: Usuario;

	protected listaItem: OportunidadeDia[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected erroMsg: string;
	
	private chave : string = '0a5037d4224612dbd95f46c69458c054ab678678';
	
	 
	getPageEdicao(): Page {
	
    	throw new Error("ListaOportunidadePrecoTabelaPage sem tela de edicao.");
    	
  	}
  	getPageDetalhe(): Page {
	
    	throw new Error("ListaOportunidadePrecoTabelaPage sem tela de detalhe.");
    	
  	}

	constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
		protected storage: Storage, protected fcmSrv: AcessaFcmService) {
		super();
	}

	ionViewWillEnter() {
		this.storage.get("chave")
			.then(async (dado) => {
				if (dado) {
					await this.fcmSrv.executaValidacaoRemote(VERSAO_APP_ID);
				}
			})
			.catch((result) => {
				console.log('Erro no getChave');
			})


		console.log('*** ListaOportunidadePrecoTabelaPageBase.ionViewWillEnter')
		this.fcmSrv.registraVisitaPagina(this.chave,VERSAO_APP_ID);
    	this.carregaUsuario();
    	this.inicializacao();
    		
  	}

	executaValidacao() {
		
	}
  	
  	carregaLista() {
  		console.log('OportunidadeDia.find: ', JSON.stringify(this.getFiltro()));
  		this.srv.ListaApp()
  			.subscribe((resultado: OportunidadeDia[]) => {
  				console.log('Result:' , resultado);
  				this.listaItem = resultado;
  				this.erroMsg = '';
  			},
			(erro: any) => {
				if (erro == 'Server error') {
					this.erroMsg = MSG_SEM_INTERNET;
				}
			})
  	}
  	
	carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.carregaLista();
		})
  	}
  
	protected detalheId(item: OportunidadeDia) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected alterarId(item: OportunidadeDia) {
		this.navCtrl.push(this.getPageDetalhe(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
	
	protected verificaConexao(erro: any) {
		if (erro == 'Server error') {
			this.erroMsg = MSG_SEM_INTERNET;
		}
	}
}
