import {Injectable} from '@angular/core';
import {BaseService} from '../shared/services/base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService extends BaseService {
  // login(username: any, password: any): any {
  //   const item = {
  //     username, password
  //   };
  //   return this.post(`/login`, item);
  // }
  // getUnReadMessageCount(studentId) {
  //   return this.get(`/api/Mobile/GetUnReadMessageCount?userId=${studentId}`);
  // }
  url = '/Partners';
  search(data: any): Observable<any> {
    return this.post(`/${this.url}/Search`, data);
  }
  getAll(): Observable<any> {
    return this.get(this.url);
  }
  getById(id: any): Observable<any> {
    return this.get(`${this.url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.post(this.url, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.put(`${this.url}/${id}`, data);
  }
  deleteById(id: any): Observable<any> {
    return this.delete(`${this.url}/`, id);
  }
}
