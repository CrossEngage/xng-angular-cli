const _ = require('underscore');
const changeCase = require('change-case'); 

import { FileService } from './file';

export class ComponentService {
  
  static getVariables(args: any) {
    return {
      name: args.name,
      capitalizeFn: (arg: string) =>  changeCase.upperCaseFirst(arg),
      camelCaseFn: (arg: string) => arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }),
      upperCamelCaseFn: (arg: string) => changeCase.upperCaseFirst(arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }))
    }
  }

  static getTemplates(variables: any) {
    return {
      component: _.template(FileService.getTemplate('component/component.ts'))(variables),
      spec: _.template(FileService.getTemplate('component/component.spec.ts'))(variables),
      template: _.template(FileService.getTemplate('component/component.html'))(variables),
    }
  }

  static writeFiles(variables: any, templates: any) {
    const name = variables.name;

    FileService.createFolder(`${name}`);
    FileService.writeFile(`${name}/${name}.component.ts`, templates.component);
    FileService.writeFile(`${name}/${name}.component.spec.ts`, templates.spec);
    FileService.writeFile(`${name}/${name}.html`, templates.template);
  }
}
