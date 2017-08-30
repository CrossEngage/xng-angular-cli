"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var component_1 = require("./../component");
function component(args) {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is gonna be the name of the component?'
        }
    ]).then(function (answers) {
        var variables = component_1.ComponentService.getVariables(answers.name);
        var templates = component_1.ComponentService.getTemplates(variables);
        component_1.ComponentService.writeFiles(answers.name, variables, templates);
    });
}
exports.component = component;
//# sourceMappingURL=component.command.js.map