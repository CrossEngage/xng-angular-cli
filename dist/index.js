var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');
inquirer.prompt([
    {
        name: 'name',
        message: 'What is gonna be the name of the component?'
    }
]).then(function (answers) {
    var variables = {
        modulePrefix: 'xng',
        componentPrefix: 'xe',
        component: answers.name,
        componentName: answers.name + "Component",
        controllerName: answers.name.split('')[0].toUpperCase() + answers.name.substring(1) + "Controller",
        controllerPath: answers.name + ".controller",
        templatePath: answers.name + ".html"
    };
    var componentTemplate = fs.
        readFileSync(__dirname + "/blueprints/__component__.component.ts", 'utf8');
    var controllerTemplate = fs.
        readFileSync(__dirname + "/blueprints/__component__.controller.ts", 'utf8');
    var templateTemplate = fs.
        readFileSync(__dirname + "/blueprints/__component__.html", 'utf8');
    componentTemplate = _.template(componentTemplate)(variables);
    controllerTemplate = _.template(controllerTemplate)(variables);
    templateTemplate = _.template(templateTemplate)(variables);
    fs.writeFileSync(process.cwd() + "/" + variables.component + ".component.ts", componentTemplate);
    fs.writeFileSync(process.cwd() + "/" + variables.component + ".controller.ts", controllerTemplate);
    fs.writeFileSync(process.cwd() + "/" + variables.component + ".html", templateTemplate);
});
//# sourceMappingURL=index.js.map