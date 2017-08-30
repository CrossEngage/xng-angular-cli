const _ = require('underscore');
const changeCase = require('change-case'); 

import { FileService } from './file';

export class IntegrationService {
  
  static getVariables(args: any) {
    return {
      provider: args.provider,
      channelType: args.channelType,
      generateSetup: args.components.some((element: string) => element === 'setup'),
      generateMessageEdit: args.components.some((element: string) => element === 'message-edit'),
      generateMessageView: args.components.some((element: string) => element === 'message-view'),
      generateService: args.components.some((element: string) => element === 'service'),
      generateOther: args.components.some((element: string) => element === 'other'),
      capitalizeFn: (arg: string) =>  changeCase.upperCaseFirst(arg),
      camelCaseFn: (arg: string) => arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }),
      upperCamelCaseFn: (arg: string) => changeCase.upperCaseFirst(arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }))
    }
  }

  static getTemplates(variables: any) {
    return {
      setupComponent: _.template(FileService.getTemplate('integrations/setup.component.ts'))(variables),
      setupSpec: _.template(FileService.getTemplate('integrations/setup.component.spec.ts'))(variables),
      setupTemplate: _.template(FileService.getTemplate('integrations/setup.html'))(variables),
      messageEditComponent: _.template(FileService.getTemplate('integrations/message-edit.component.ts'))(variables),
      messageEditSpec: _.template(FileService.getTemplate('integrations/message-edit.component.spec.ts'))(variables),
      messageEditTemplate: _.template(FileService.getTemplate('integrations/message-edit.html'))(variables),
      messageViewComponent: _.template(FileService.getTemplate('integrations/message-view.component.ts'))(variables),
      messageViewTemplate: _.template(FileService.getTemplate('integrations/message-view.html'))(variables),
      service: _.template(FileService.getTemplate('integrations/service.ts'))(variables),
      serviceSpec: _.template(FileService.getTemplate('integrations/service.spec.ts'))(variables),
      models: _.template(FileService.getTemplate('integrations/models.ts'))(variables),
      module: _.template(FileService.getTemplate('integrations/module.ts'))(variables),
      index: _.template(FileService.getTemplate('integrations/index.ts'))(variables),
    }
  }

  static writeFiles(variables: any, templates: any) {
    const fileName = `${variables.provider}--${variables.channelType}`;
    const folderName = `+${fileName}`;

    FileService.createFolder(folderName);
    
    if (variables.generateSetup) {
      FileService.writeFile(`${folderName}/${fileName}-setup.component.ts`, templates.setupComponent);
      FileService.writeFile(`${folderName}/${fileName}-setup.component.spec.ts`, templates.setupSpec);
      FileService.writeFile(`${folderName}/${fileName}-setup.html`, templates.setupTemplate);
    }
    
    if (variables.generateMessageEdit) {
      FileService.writeFile(`${folderName}/${fileName}-message-edit.component.ts`, templates.messageEditComponent);
      FileService.writeFile(`${folderName}/${fileName}-message-edit.component.spec.ts`, templates.messageEditSpec);
      FileService.writeFile(`${folderName}/${fileName}-message-edit.html`, templates.messageEditTemplate);
    }

    if (variables.generateMessageView) {
      FileService.writeFile(`${folderName}/${fileName}-message-view.component.ts`, templates.messageViewComponent);
      FileService.writeFile(`${folderName}/${fileName}-message-view.html`, templates.messageViewTemplate);
    }

    if (variables.generateService) {
      FileService.writeFile(`${folderName}/${fileName}.service.ts`, templates.service);
      FileService.writeFile(`${folderName}/${fileName}.service.spec.ts`, templates.serviceSpec);
    }

    if (variables.generateOther) {
      FileService.writeFile(`${folderName}/${fileName}.models.ts`, templates.models);
      FileService.writeFile(`${folderName}/${fileName}.module.ts`, templates.module);
      if (variables.generateSetup || variables.generateMessageView) {
        FileService.writeFile(`${folderName}/index.ts`, templates.index);
      }
    }
  }

}
