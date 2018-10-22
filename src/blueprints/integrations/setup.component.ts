import { Component, OnInit } from '@angular/core';

import { IntegrationSetup } from 'src/modules/integrations/integration-setup';
import { ValidationErrorService } from 'src/app/core/validation-error-service/validation-error.service';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Account } from '../<%= provider %>--<%= channelType %>.models';
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service } from '../<%= provider %>--<%= channelType %>.service';

@Component({
  selector: 'xe-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-setup.html')
})

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent extends IntegrationSetup<<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Account> implements OnInit {

  constructor(
    private <%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service,
    private validationErrorService: ValidationErrorService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
    this.validationErrorService.touchFormControls(this.setupForm);
  }

}