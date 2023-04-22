import { Injectable } from '@angular/core';
import { BaseSerivce } from '../baseSerivce/base-serivce.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseSerivce {

  constructor(private http: HttpClient) {
    super();
  }

  loginUser(user: User): Observable<User> {
    //dispara o endpoint com o corpo e o header
    let response = this.http
      .post(`${this.UrlService}/login`, user, this.cahtHeaderJson())
      .pipe(
        //map para pegar o token
        map(this.extractData),
        //caso ocorra um erro, ele pega o erro e devolve
        catchError(this.serviceError));
    return response;
  }
}
