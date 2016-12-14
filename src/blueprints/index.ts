import { <%= componentName %> } from './<%= componentPath %>';

export const <%= moduleName %> = angular
  .module('<%= modulePrefix %>.<%= moduleName %>', [])
  .component('<%= componentPrefix %><%= capitalizedComponentName %>', <%= componentName %>)
  .name;