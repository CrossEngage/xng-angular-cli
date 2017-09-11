import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= upperCamelCaseFn(name) %>Component } from './<%= name %>.component';

describe('<%= upperCamelCaseFn(name) %>Component', () => {
  let component: <%= upperCamelCaseFn(name) %>Component;
  let fixture: ComponentFixture<<%= upperCamelCaseFn(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= upperCamelCaseFn(name) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= upperCamelCaseFn(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
