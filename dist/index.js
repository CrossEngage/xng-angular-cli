"use strict";
var inquirer = require("inquirer");
var component_1 = require("./component");
inquirer.prompt([
    {
        name: 'name',
        message: 'What is gonna be the name of the component?'
    }
]).then(function (answers) {
    var variables = component_1.ComponentService.getVariables(answers.name);
    var templates = component_1.ComponentService.getTemplates(variables);
    component_1.ComponentService.writeFiles(variables, templates);
});
//# sourceMappingURL=index.js.map