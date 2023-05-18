import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Constant} from '../constants/constant.class';
import {environment} from '../../../environments/environment';
import {Platform} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';

@Injectable()
export class BaseService {

  constructor(
    public httpClient: HttpClient,
    protected platform: Platform,
    protected localStorage: StorageService
  ) {
  }
  get(url: string, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.get(environment.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'text',
        });
      case 'blob':
        return this.httpClient.get(environment.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'blob',
        });
      default:
        return this.httpClient.get(environment.baseUrl + url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params
        });
    }
  }
  getLocal(url: string, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.get(url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'text',
        });
      case 'blob':
        return this.httpClient.get(url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params,
          responseType: 'blob',
        });
      default:
        return this.httpClient.get(url, {
          headers: this.createHeaders().set('skipLoading', 'true') || {},
          params
        });
    }
  }

  /**
   * Create a new entity.
   * @param url the api url
   * @param data the entity to create
   */
  post(url: string, data: any, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text',
          params
        });
      case 'blob':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          responseType: 'blob',
          params
        });
      case 'arraybuffer':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          responseType: 'blob',
          params
        });
      default:
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          params
        });
    }
  }
  postLocal(url: string, data: any, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text',
          params
        });
      case 'blob':
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'blob',
          params
        });
      case 'arraybuffer':
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'blob',
          params
        });
      default:
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          params
        });
    }
  }
  postUpload(url: string, data: any, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeadersIncaseUpload() || {},
          responseType: 'text',
          params
        });
      case 'blob':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeadersIncaseUpload() || {},
          responseType: 'blob',
          params
        });
      case 'arraybuffer':
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeadersIncaseUpload() || {},
          responseType: 'blob',
          params
        });
      default:
        return this.httpClient.post(environment.baseUrl + url, data, {
          headers: this.createHeadersIncaseUpload() || {},
          params
        });
    }
  }
  /**
   * Update an entity.
   * @param url the api url
   * @param data the entity to be updated
   */
  put(url: string, data: any, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.put(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text'
        });
      default:
        return this.httpClient.put(environment.baseUrl + url, data, {
          headers: this.createHeaders() || {},
        });
    }
  }

  /**
   * Delete an entity.
   * @param url the api url
   * @param id the entity id to be deleted
   */
  delete(url: string, id: any, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.delete(environment.baseUrl + url, {
          headers: this.createHeaders() || {},
          responseType: 'text'
        });
      default:
        return this.httpClient.delete(environment.baseUrl + url, {
          headers: this.createHeaders() || {},
        });
    }
  }
  public createHeaders() {
    // Why 'authorization': see CustomLogoutSuccessHandler on server
    return new HttpHeaders();//.set('Authorization', 'Bearer ' + this.getToken()).set('Language', this.getLanguage());
  }
  public createHeadersIncaseUpload() {
    // Why 'authorization': see CustomLogoutSuccessHandler on server
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken()).set('Language', this.getLanguage()).set('Content-Disposition', 'multipart/form-data');
    // headers.append('Content-Disposition', 'multipart/form-data');
    console.log('headers', headers);
    return headers;
  }
  private getToken() {
    return localStorage.getItem(Constant.TOKEN);
  }
  private getLanguage() {
    let lang = localStorage.getItem(Constant.LANGUAGE);
    if (!lang) {
      localStorage.setItem(Constant.LANGUAGE, 'vi');
      lang = 'vi';
    }
    return lang;
  }
}
