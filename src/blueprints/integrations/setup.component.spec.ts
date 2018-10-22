import { FormsModule, NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent } from './<%= provider %>--<%= channelType %>-setup.component';

describe('<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent', () => {

  let component: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent;
  let fixture: ComponentFixture<<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent
      ]
    })
      .overrideTemplate(<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent);
    component = fixture.componentInstance;
    component.setupForm = new NgForm(null, null);
    component.form = {
      $setValidity: (error: string, value: boolean) => {
        component.form.errors = [];
        component.form.errors[error] = value;
        component.form.invalid = true;
      },
      $setDirty: () => {
        component.form.isDirty = true;
      }
    };

  });

  describe('#ngOnInit', () => {

    it('should set form to invalid', () => {
      component.ngOnInit();
      expect(component.form.invalid).toEqual(true);
    });

    it('should set form to dirty', () => {
      component.ngOnInit();
      expect(component.form.isDirty).toEqual(true);
    });

    it('should set form to dirty', () => {
      expect(false).toEqual(true, 'Test for <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent not implemented');
    });

  });

});
