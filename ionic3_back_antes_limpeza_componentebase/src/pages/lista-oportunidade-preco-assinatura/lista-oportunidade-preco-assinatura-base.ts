
import { OportunidadeDia, OportunidadeDiaApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET, VERSAO_APP_ID } from '../../app/const';
import { ComponenteBase } from '../componente-base';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';


// Tipo: LISTA - Criado por: templates/ionic3/pages/lista-timeline/ListaTimelinePageProdBaseTs.javajet
export abstract class ListaOportunidadePrecoAssinaturaPageBase extends ComponenteBase{

    protected usuario: Usuario;

	protected listaItem: OportunidadeDia[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected erroMsg: string;
	
	private chave : string = 'a22a0a1ba05ba81fd501a9814f64a12696df2d32';
	
	 
	getPageEdicao(): Page {
	
    	throw new Error("ListaOportunidadePrecoAssinaturaPage sem tela de edicao.");
    	
  	}
  	getPageDetalhe(): Page {
	
    	throw new Error("ListaOportunidadePrecoAssinaturaPage sem tela de detalhe.");
    	
  	}

	constructor(public navCtrl: NavController, protected srv: OportunidadeDiaApi,
		protected storage: Storage, protected fcmSrv: AcessaFcmService) {
		super();
	}

	ionViewWillEnter() {
		this.fcmSrv.registraVisitaPagina(this.chave,VERSAO_APP_ID);
		console.log('');
    		console.log('Tela: ListaOportunidadePrecoAssinaturaPage<<LISTA>> : OportunidadeDia');
    		this.carregaUsuario();
    		this.inicializacao();
    		
  	}
  	
  	carregaLista() {
  		console.log('OportunidadeDia.find: ', JSON.stringify(this.getFiltro()));
  		this.srv.find(this.getFiltro())
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
