
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface VisitanteInterface {
	"codigoCookie"?: string;
	"dataHora"?: Date;
	"versaoAppId"?: number;
	"id"?: number;
}

export class Visitante implements VisitanteInterface {
	codigoCookie?: string;
	dataHora?: Date;
	versaoAppId?: number;
	id?: number;
  constructor(data?: VisitanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Visitante";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Visitante for dynamic purposes.
  **/
  public static factory(data: VisitanteInterface): Visitante{
    return new Visitante(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Cosmetic_Visitante',
      plural: 'Cosmetic_Visitantes',
      path: 'Cosmetic_Visitantes',
      idName: 'id',
      properties: {
		
        "codigoCookie" : {
        	name : "codigoCookie",
        	type : "string"
        },
        "dataHora" : {
        	name : "dataHora",
        	type : "Date"
        },
        "versaoAppId" : {
        	name : "versaoAppId",
        	type : "number"
        },
        "id" : {
        	name : "id",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}