import { Component, OnChanges } from '@angular/core';
import { ValidationErrorService } from 'src/app/core/validation-error-service/validation-error.service';
import { MessageEditComponent } from 'src/modules/integrations/shared-integrations/message-edit/message-edit.component';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content } from '../<%= provider %>--<%= channelType %>.models';
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service } from '../<%= provider %>--<%= channelType %>.service';

@Component({
  selector: 'xe-message-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-message-edit.html')
})
export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent extends MessageEditComponent<<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content> implements OnChanges {

  protected fields;

  constructor(
    private <%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service,
    protected validationErrorService: ValidationErrorService
  ) {
    super(<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content, validationErrorService);
  }

  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
}


