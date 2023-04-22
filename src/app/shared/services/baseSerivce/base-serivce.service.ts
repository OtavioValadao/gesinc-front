import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { LocalStorageUtils } from '../../utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseSerivce {

  //protected UrlService: string = "http://localhost:8080/api/v1/auth/register";
  protected UrlService: string = "http://localhost:8080/user";
  public LocalStorage = new LocalStorageUtils();

  constructor() { }


  protected extractData(response: any) {
    //extrai o objeto do usuario
    return response || {};
  }

  protected cahtHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];

    // se o erro for uma instancia de HTTP_RESPONSE
    if (response instanceof HttpErrorResponse) {
      //Caso for um erro desconhecido
      if (response.statusText === "Unknown Error") {
        customError.push("Ocorreu um erro desconhecido");
        response.error.errors = customError;
      }
    }
    console.error(response);
    return throwError(() => response);
  }

  protected ObterAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
      })
    };
  }
}
