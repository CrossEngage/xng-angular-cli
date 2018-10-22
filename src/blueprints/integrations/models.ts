import { Integration } from 'src/modules/integrations/models/integration-provider.model';

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Content {
  
}

export class <%= upperCamelCaseFn(provider) %><%= upperCamelCaseFn(channelType) %>Account  implements Integration {
  accountName: string;
  beta: boolean;
  channelType: string;
  subChannelType: string;
  provider: string;
  externalTemplateAccountId?: string;
  unsupportedCampaignTypes?: string[];
}