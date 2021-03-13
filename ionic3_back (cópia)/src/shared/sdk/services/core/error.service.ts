/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse) {
    console.log(JSON.stringify(errorResponse));
  	return _throw(errorResponse.error.error || JSON.stringify(errorResponse));
    //return throwError(errorResponse.error.error || 'Server error');
   
	//return null;
  }
}
