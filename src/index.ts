import inquirer = require('inquirer');

import { ComponentService } from './component';

inquirer.prompt([
  {
    name: 'name',
    message: 'What is gonna be the name of the component?'
  }
]).then((answers: any) => {
  let variables = ComponentService.getVariables(answers.name);
  let templates = ComponentService.getTemplates(variables);

  ComponentService.writeFiles(answers.name, variables, templates);
});