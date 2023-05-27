import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { Observable } from 'rxjs';
import { UrlConstant } from '../shared/constants/url.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService {
  // login(username: any, password: any): any {
  //   const item = {
  //     username, password
  //   };
  //   return this.post(`/login`, item);
  // }
  // getUnReadMessageCount(studentId) {
  //   return this.get(`/api/Mobile/GetUnReadMessageCount?userId=${studentId}`);
  // }
  serviceUrl: string = UrlConstant.URL_ORDER;
  getOrders(payload: any): Observable<any> {
    return this.post(this.serviceUrl + '/GetOrders', payload);
  }
  // search(data: any): Observable<any> {
  //   return this.post(`/${this.url}/Search`, data);
  // }
  // getAll(): Observable<any> {
  //   return this.get(this.url);
  // }
  // getById(id: any): Observable<any> {
  //   return this.get(`${this.url}/${id}`);
  // }
  // create(data: any): Observable<any> {
  //   return this.post(this.url, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.put(`${this.url}/${id}`, data);
  // }
  // deleteById(id: any): Observable<any> {
  //   return this.delete(`${this.url}/`, id);
  // }
}
