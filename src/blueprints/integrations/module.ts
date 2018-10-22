import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedIntegrationsModule } from '../shared-integrations/shared-integrations.module';
<% if (generateSetup) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent }       from './<%= provider %>--<%= channelType %>-setup/<%= provider %>--<%= channelType %>-setup.component';<% } %><% if (generateMessageEdit) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent } from './<%= provider %>--<%= channelType %>-message-edit/<%= provider %>--<%= channelType %>-message-edit.component';<% } %><% if (generateMessageView) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent } from './<%= provider %>--<%= channelType %>-message-view/<%= provider %>--<%= channelType %>-message-view.component';<% } %><% if (generateService) { %>
import { <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service }              from './<%= provider %>--<%= channelType %>.service';<% } %>

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SharedIntegrationsModule,
  ],
  declarations: [<% if (generateSetup) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent,<% } %><% if (generateMessageEdit) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent,<% } %><% if (generateMessageView) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent<% } %>
  ],
  entryComponents: [<% if (generateSetup) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent,<% } %><% if (generateMessageEdit) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent,<% } %><% if (generateMessageView) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent<% } %>
  ],
  exports: [<% if (generateSetup) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>SetupComponent,<% } %><% if (generateMessageEdit) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageEditComponent,<% } %><% if (generateMessageView) { %>
    <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>MessageViewComponent<% } %>
  ]<% if (generateService) { %>,
  providers: [ <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Service ]<% } %>
})
export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Module { }
