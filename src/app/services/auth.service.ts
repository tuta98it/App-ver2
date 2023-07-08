import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from '../model/auth.model';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../shared/constants/constant.class';
//  import { AppConfigService } from '../../app-config.service';
import { UrlConstant } from '../shared/constants/url.class';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  // private configService: AppConfigService
  constructor(private httpClient: HttpClient ) {
  }
  login(payload): Observable<AuthModel> {
    return this.httpClient.post(environment.baseUrl + '/login', payload);
  }
  logout() {
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${localStorage.getItem(Constant.TOKEN)}`,
    };
    // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
    const token = 'Bearer ' + localStorage.getItem(Constant.TOKEN);
    return this.httpClient.post(environment.baseUrl + UrlConstant.LOGOUT, token, { headers });
  }
  checkToken(): any {
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${localStorage.getItem(Constant.TOKEN)}`,
    };
    // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
    const token = 'Bearer ' + localStorage.getItem(Constant.TOKEN);
    // return this.httpClient.post(environment.baseUrl + UrlConstant.VALIDATE, token, { headers });
    return this.httpClient.post(environment.baseUrl + UrlConstant.VALIDATE, token, { headers });
  }
  checkTokenAdmin(): any {
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${localStorage.getItem(Constant.TOKEN)}`,
    };
    let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
    token = 'Bearer ' + localStorage.getItem(Constant.TOKEN);
    return this.httpClient.post(environment.baseUrl + UrlConstant.VALIDATE_ADMIN, token, { headers });
  }
  checkTokenCSC(): any {
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${localStorage.getItem(Constant.TOKEN)}`,
    };
    // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
    const token = 'Bearer ' + localStorage.getItem(Constant.TOKEN);
    return this.httpClient.post(environment.baseUrl + UrlConstant.VALIDATE_CSC, token, { headers });
  }
  registration(payload: any): any {
    return this.httpClient.post(environment.baseUrl + '/User/Signup', payload);
  }
}
