const _ = require('underscore');
const changeCase = require('change-case'); 

import { FileService } from './file';
import { ComponentService } from './component';

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
      fields: _.template(FileService.getTemplate('integrations/fields.ts'))(variables),
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

  static writeFiles(variables: any, templates: any, baseUrl: string = '') {
    const fileName = `${variables.provider}--${variables.channelType}`;
    const directory = `${baseUrl}/+${fileName}`;

    FileService.createFolder(directory);

    FileService.writeFile(`${directory}/${fileName}-fields.ts`, templates.fields);

    if (variables.generateSetup) {
      FileService.createFolder(`${directory}/${fileName}-setup/`);
      FileService.writeFile(`${directory}/${fileName}-setup/${fileName}-setup.component.ts`, templates.setupComponent);
      FileService.writeFile(`${directory}/${fileName}-setup/${fileName}-setup.component.spec.ts`, templates.setupSpec);
      FileService.writeFile(`${directory}/${fileName}-setup/${fileName}-setup.html`, templates.setupTemplate);
    }
    
    if (variables.generateMessageEdit) {
      FileService.createFolder(`${directory}/${fileName}-message-edit/`);
      FileService.writeFile(`${directory}/${fileName}-message-edit/${fileName}-message-edit.component.ts`, templates.messageEditComponent);
      FileService.writeFile(`${directory}/${fileName}-message-edit/${fileName}-message-edit.component.spec.ts`, templates.messageEditSpec);
      FileService.writeFile(`${directory}/${fileName}-message-edit/${fileName}-message-edit.html`, templates.messageEditTemplate);
    }

    if (variables.generateMessageView) {
      FileService.createFolder(`${directory}/${fileName}-message-view/`);
      FileService.writeFile(`${directory}/${fileName}-message-view/${fileName}-message-view.component.ts`, templates.messageViewComponent);
      FileService.writeFile(`${directory}/${fileName}-message-view/${fileName}-message-view.html`, templates.messageViewTemplate);
    }

    if (variables.generateService) {
      FileService.writeFile(`${directory}/${fileName}.service.ts`, templates.service);
      FileService.writeFile(`${directory}/${fileName}.service.spec.ts`, templates.serviceSpec);
    }

    if (variables.generateOther) {
      FileService.writeFile(`${directory}/${fileName}.models.ts`, templates.models);
      FileService.writeFile(`${directory}/${fileName}.module.ts`, templates.module);
      if (variables.generateSetup || variables.generateMessageView) {
        FileService.writeFile(`/${directory}/index.ts`, templates.index);
      }
    }
  }

}
