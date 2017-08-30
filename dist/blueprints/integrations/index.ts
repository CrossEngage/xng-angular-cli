import { downgradeComponent } from '@angular/upgrade/static';<% if (generateSetup) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent }       from './<%= provider %>--<%= channelType %>-setup.component';<% } %><% if (generateMessageView) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent } from './<%= provider %>--<%= channelType %>-message-view.component';<% } %>
<% if (generateSetup) { %>
export const <%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupModule = angular
  .module('xng.<%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>', [])
  .directive('xe<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>', downgradeComponent({
    component: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent,
    inputs: [
      'integration',
      'backendError',
      'alreadyExistedNames',
      'form'
    ]
  }) as angular.IDirectiveFactory)
  .name;
<% } %><% if (generateMessageView) { %>
export const <%= camelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewModule = angular
  .module('xng.messageView<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>', [])
  .directive('xeCampaignMessageView<%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>', downgradeComponent({
    component: <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent,
    inputs: [
      'message'
    ]
  }) as angular.IDirectiveFactory)
  .name;
<% } %>