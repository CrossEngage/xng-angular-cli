import inquirer = require('inquirer');

import { IntegrationService } from './../integration';

export function integration (argv: string[]) {
  if (argv.length === 0) {
    console.log('integration generator requires a name.');
    return;
  }

  inquirer.prompt([
    {
      name: 'channelType',
      message: 'Enter the channelType of the integration (e.g. segment-transfer):'
    }, {
      name: 'components',
      type: 'checkbox',
      message: 'Please select the components and service you want to generate for the integration:',
      choices: [
        'setup',
        'message-edit',
        'message-view',
        'service',
        'other'
      ],
      default: [
        'setup',
        'message-edit',
        'message-view',
        'service',
        'other'
      ]
    }
  ]).then((answers: any) => {
    answers.provider = argv[0];
    let variables = IntegrationService.getVariables(answers);
    let templates = IntegrationService.getTemplates(variables);
    IntegrationService.writeFiles(variables, templates, '/src/modules/integrations');
    console.log('Integration generated.');
    console.log('----------------------');
    console.log('Still TODO:');
    console.log(' * Add module to integrations.module.');
    console.log(' * Add components in parent component templates (message-content etc.).');
    console.log(' * Register downgraded components in AngularJS app.');
  });
  
}
