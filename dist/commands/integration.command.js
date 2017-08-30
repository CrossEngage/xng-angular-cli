"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var integration_1 = require("./../integration");
function integration(argv) {
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
    ]).then(function (answers) {
        answers.provider = argv[0];
        var variables = integration_1.IntegrationService.getVariables(answers);
        var templates = integration_1.IntegrationService.getTemplates(variables);
        integration_1.IntegrationService.writeFiles(variables, templates);
        console.log('Integration generated.');
        console.log('----------------------');
        console.log('Still TODO:');
        console.log(' * Add module to integrations.module.');
        console.log(' * Add components in parent component templates (message-content etc.).');
        console.log(' * Register downgraded components in AngularJS app.');
    });
}
exports.integration = integration;
//# sourceMappingURL=integration.command.js.map