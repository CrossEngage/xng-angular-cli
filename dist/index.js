var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');
var PREFIX_REGEXP = /^((?:x|data)[:\-_])/i;
var SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
inquirer.prompt([
    {
        name: 'name',
        message: 'What is gonna be the name of the component?'
    }
]).then(function (answers) {
    var variables = {
        modulePrefix: 'xng',
        moduleName: "" + directiveNormalize(answers.name),
        componentPrefix: 'xe',
        component: answers.name,
        componentName: directiveNormalize(answers.name) + "Component",
        capitalizedComponentName: "" + (directiveNormalize(answers.name).split('')[0].toUpperCase() + directiveNormalize(answers.name).substring(1)),
        controllerName: directiveNormalize(answers.name).split('')[0].toUpperCase() + directiveNormalize(answers.name).substring(1) + "Controller",
        componentPath: answers.name + ".component",
        controllerPath: answers.name + ".controller",
        templatePath: answers.name + ".html"
    };
    var indexTemplate = _.template(_getTemplate('index.ts'))(variables);
    var componentTemplate = _.template(_getTemplate('component.ts'))(variables);
    var componentSpecTemplate = _.template(_getTemplate('component.spec.ts'))(variables);
    var controllerTemplate = _.template(_getTemplate('controller.ts'))(variables);
    var htmlTemplate = _.template(_getTemplate('template.html'))(variables);
    _writeFile("index.ts", indexTemplate);
    _writeFile(variables.component + ".component.ts", componentTemplate);
    _writeFile(variables.component + ".component.spec.ts", componentSpecTemplate);
    _writeFile(variables.component + ".controller.ts", controllerTemplate);
    _writeFile(variables.component + ".html", htmlTemplate);
});
function _getTemplate(name) {
    return fs.
        readFileSync(__dirname + "/blueprints/" + name, 'utf8');
}
function _writeFile(name, template) {
    fs.writeFileSync(process.cwd() + "/" + name, template);
}
function directiveNormalize(name) {
    return name
        .replace(PREFIX_REGEXP, '')
        .replace(SPECIAL_CHARS_REGEXP, fnCamelCaseReplace);
}
function fnCamelCaseReplace(all, letter) {
    return letter.toUpperCase();
}
//# sourceMappingURL=index.js.map