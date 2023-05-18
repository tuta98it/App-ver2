import {Injectable} from '@angular/core';
import {BaseService} from '../shared/services/base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {
  login(username: any, password: any): any {
    const item = {
      username, password
    };
    return this.post(`/login`, item);
  }
  getUnReadMessageCount(studentId) {
    return this.get(`/api/Mobile/GetUnReadMessageCount?userId=${studentId}`);
  }
}
