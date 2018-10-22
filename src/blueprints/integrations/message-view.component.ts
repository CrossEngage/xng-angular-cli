import { Component, Input } from '@angular/core';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service } from '../<%= provider %>--<%= channelType %>.service';
import { CampaignMessage } from 'src/modules/campaign/models/campaign-message.model';

@Component({
  selector: 'xe-campaign-message-view-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-message-view.html')
})

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent {

  @Input() message: CampaignMessage;

  constructor(
    private <%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service,
  ) { }

}