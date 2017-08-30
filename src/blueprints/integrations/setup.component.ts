import { Component, Input, OnChanges, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'xe-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-setup.html')
})

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent implements OnInit, OnChanges {

  @Input() integration;
  @Input() backendError;
  @Input() alreadyExistedNames;
  @Input() form;

  readonly accountNameErrorMessages = [
    {'required': 'Account name is required'},
    {'alreadyExistedName': 'Account with the same name already exists'},
    {'notMatch': `Please do not use " / " or " \ " characters.`}
  ];

  @ViewChild('setupForm') public setupForm: NgForm;

  ngOnInit() {
    this.form.$setValidity('setup', false);
    this.form.$setDirty();
    this.setupForm.form.valueChanges.subscribe(
      data => {
        this.form.$setValidity('setup', this.setupForm.valid);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    let currentError = changes.backendError.currentValue;
    if (currentError) {
      this.handleBackendError(currentError);
    }
  }

  private handleBackendError(error: [any]): void {
    if (error && error.length === 1) {
      if (error[0].field === 'apiKey') {
        this.setupForm.form.controls.apiKey.setErrors({
          'invalid': true
        });
      }
    }
  }

}