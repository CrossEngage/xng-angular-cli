const _ = require('underscore');

import { FileService } from './file';

export class ComponentService {
  
  static getVariables(name: string) {
    return {
      modulePrefix: 'xng', // this should come from a config file later
      moduleName: `${FileService.directiveNormalize(name)}`,
      componentPrefix: 'xe',
      component: name,
      componentName: `${FileService.directiveNormalize(name)}Component`,
      capitalizedComponentName: `${FileService.directiveNormalize(name).split('')[0].toUpperCase() + FileService.directiveNormalize(name).substring(1)}`,
      controllerName: `${FileService.directiveNormalize(name).split('')[0].toUpperCase() + FileService.directiveNormalize(name).substring(1)}Controller`,
      componentPath: `${name}.component`,
      controllerPath: `${name}.controller`,
      templatePath: `${name}.html`
    }
  }

  static getTemplates(variables: any) {
    return {
      index: _.template(FileService.getTemplate('index.ts'))(variables),
      component: _.template(FileService.getTemplate('component.ts'))(variables),
      componentSpec: _.template(FileService.getTemplate('component.spec.ts'))(variables),
      controller: _.template(FileService.getTemplate('controller.ts'))(variables),
      html: _.template(FileService.getTemplate('template.html'))(variables) 
    }
  }

  static writeFiles(name: string, variables: any, templates: any) {
    FileService.createFolder(name);
    FileService.writeFile(`${name}/index.ts`, templates.index);
    FileService.writeFile(`${name}/${variables.component}.component.ts`, templates.component);
    FileService.writeFile(`${name}/${variables.component}.component.spec.ts`, templates.componentSpec);
    FileService.writeFile(`${name}/${variables.component}.controller.ts`, templates.controller);
    FileService.writeFile(`${name}/${variables.component}.html`, templates.html);
  }

}