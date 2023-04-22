import { Injectable } from '@angular/core';
import { BaseSerivce } from '../baseSerivce/base-serivce.service';
import { User } from '../../interfaces/user';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountSerivce extends BaseSerivce {

  constructor(private http: HttpClient) {
    super();
  }

  registerUser(user: User): Observable<User> {
    let response = this.http
      //dispara o endpoint com o corpo e o header
      .post(this.UrlService, user, this.cahtHeaderJson())
      .pipe(
        //map para pegar o token
        map(this.extractData),
        //caso ocorra um erro, ele pega o erro e devolve
        catchError(this.serviceError));
    return response;
  }
}
