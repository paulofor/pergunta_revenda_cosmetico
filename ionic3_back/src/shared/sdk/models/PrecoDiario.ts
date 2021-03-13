// Criado por : templates/angular/loopback/LoopbackModel.javajet
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface PrecoDiarioInterface {
}

export class PrecoDiario implements PrecoDiarioInterface {
  constructor(data?: PrecoDiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "PrecoDiario";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of PrecoDiario for dynamic purposes.
  **/
  public static factory(data: PrecoDiarioInterface): PrecoDiario{
    return new PrecoDiario(data);
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
      name: 'Cosmetic_PrecoDiario',
      plural: 'Cosmetic_PrecoDiarios',
      path: 'Cosmetic_PrecoDiarios',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}