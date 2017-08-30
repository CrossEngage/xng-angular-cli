import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ValidationErrorService } from 'app/modules/common/services/validation-error.service';
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content } from './<%= provider %>--<%= channelType %>.models';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent } from './<%= provider %>--<%= channelType %>-message-edit.component';
import { IntegrationRef } from 'app/modules/campaign/models/integration-ref.model';

describe('<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent', () => {
  let component: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent;
  let fixture: ComponentFixture<<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent>;

  const mockNewContent = new <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content();

  const validationErrorServiceStub = {
    touchFormControls: jasmine.createSpy('touchFormControls'),
    untouchFormControls: jasmine.createSpy('untouchFormControls')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent],
      providers: [
        { provide: ValidationErrorService, useValue: validationErrorServiceStub},
      ]
    })
    .overrideTemplate(<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent, '')
    .compileComponents();

    fixture = TestBed.createComponent(<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent);
    component = fixture.componentInstance;

    component.content = mockNewContent;
  });

  describe('#showValidation', () => {
    it ('should call `#validationErrorService.touchForm`', () => {
      component.showValidation();
      expect(component['validationErrorService'].touchFormControls).toHaveBeenCalled();
    })
  });

  describe('#hideValidation', () => {
    it ('should call `#validationErrorService.untouchForm`', () => {
      component.hideValidation();
      expect(component['validationErrorService'].untouchFormControls).toHaveBeenCalled();
    })
  });
});
