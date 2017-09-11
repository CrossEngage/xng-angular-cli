import inquirer = require('inquirer');

import { ComponentService } from './../component';

export function component(argv: string[]) {

  if (argv.length === 0) {
    console.log('component generator requires a name.');
    return;
  }

  let variables = ComponentService.getVariables({name: argv[0]});
  let templates = ComponentService.getTemplates(variables);
  ComponentService.writeFiles(variables, templates);
  console.log('Component generated.');
  console.log('----------------------');
  console.log('Still TODO:');
  console.log(' * Add component to implementing module.');

}
