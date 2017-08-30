import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service {

  readonly URL = {
    PLACEHOLDER: 'placeholder'
  }

  constructor(
    private http: HttpClient
  ) { }

  // replace this with real functionality: 
  getDataFromBackend(test: string): Observable<any> {
    let params = new HttpParams().set('placeholder', test );
    return this.http.get(this.URL.PLACEHOLDER, { params });
  }

}
