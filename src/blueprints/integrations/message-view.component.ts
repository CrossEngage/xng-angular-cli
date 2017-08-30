import { Component, Input } from '@angular/core';

import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content } from './<%= provider %>--<%= channelType %>.models';
import { CampaignMessage } from 'app/modules/campaign/models/campaign-message.model';

@Component({
  selector: 'xe-campaign-message-view-<%= provider %>-<%= channelType %>',
  template: require('./<%= provider %>--<%= channelType %>-message-view.html')
})

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent {

  @Input() message: CampaignMessage;

}