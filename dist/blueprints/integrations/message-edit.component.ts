import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ValidationErrorService } from 'app/modules/common/services/validation-error.service';
import { MessageEdit } from 'app/modules/integrations/message-edit.interface';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content } from './<%= provider %>--<%= channelType %>.models';
import { IntegrationRef } from 'app/modules/campaign/models/integration-ref.model';

@Component({
  selector: 'xe-message-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-message-edit.html')
})
export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent implements OnChanges, AfterViewInit, MessageEdit {

  @Input() content: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content;
  @Output() contentChange = new EventEmitter<<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content>();
  @Input() integrationRef: IntegrationRef;

  @ViewChild('messageEditForm') public form: NgForm;

  constructor(private validationErrorService: ValidationErrorService) { }

  ngOnChanges(changes) {
    if (changes.content && !changes.content.currentValue) {
      this.content = new <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content();
    }
  }

  ngAfterViewInit() {
    this.form.statusChanges.subscribe(status => {
      this.contentChange.emit(this.content);
    });
  }

  showValidation(): void {
    this.validationErrorService.touchFormControls(this.form);
  }

  hideValidation(): void {
    this.validationErrorService.untouchFormControls(this.form);
  }
}


