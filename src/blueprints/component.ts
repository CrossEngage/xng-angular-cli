import { <%= controllerName %> } from './<%= controllerPath %>';

export const <%= componentName %>: angular.IComponentOptions = {
  bindings: {},
  controller: <%= controllerName %>,
  template: require('fs')
    .readFileSync(`${__dirname}/<%= templatePath %>.html`, 'utf8')
};
