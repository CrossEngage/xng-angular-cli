import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

import { TestBed, async } from '@angular/core/testing';

import { O<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service } from './<%= provider %>--<%= channelType %>.service';


 describe('<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service', () => {
  let service: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service;
  let result;

  const httpServiceStub = {
    get: (url) => {
      switch (url) {
        case service.URL.PLACEHOLDER:
        return Observable.from(['placeholder response']);
      }
    }
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service,
        { provide: HttpClient, useValue: httpServiceStub }
      ]
    });
  });

  beforeEach(() => {
    service = new <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service(TestBed.get(HttpClient) as HttpClient);
  });

  afterEach(() => {
    result = null;
  });

  // replace this with test of real functionality:
  describe('#getDataFromBackend', () => {
    it('should call getDataFromBackend ', async(() => {
      let params = {
        test: '12345t'
      };
      service.testOptimizelyConnection(params.test).subscribe(res => {
        result = res;
      });
      expect(result).toBe('placeholder response');
    }));
  });

});
