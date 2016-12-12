var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');

var PREFIX_REGEXP = /^((?:x|data)[:\-_])/i;
var SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;

function directiveNormalize(name: string) {
  return name
    .replace(PREFIX_REGEXP, '')
    .replace(SPECIAL_CHARS_REGEXP, fnCamelCaseReplace);
}

function fnCamelCaseReplace(all: string, letter: string) {
  return letter.toUpperCase();
}

inquirer.prompt([
  {
    name: 'name',
    message: 'What is gonna be the name of the component?'
  }
]).then((answers: any) => {
  let variables = {
    modulePrefix: 'xng',
    componentPrefix: 'xe',
    component: answers.name,
    componentName: `${directiveNormalize(answers.name)}Component`,
    controllerName: `${directiveNormalize(answers.name).split('')[0].toUpperCase() + directiveNormalize(answers.name).substring(1)}Controller`,
    controllerPath: `${answers.name}.controller`,
    templatePath: `${answers.name}.html`
  };

  let componentTemplate = _getTemplate('component.ts');
  let controllerTemplate = _getTemplate('controller.ts');
  let htmlTemplate = _getTemplate('template.html');

  componentTemplate = _.template(componentTemplate)(variables);
  controllerTemplate = _.template(controllerTemplate)(variables);
  htmlTemplate = _.template(htmlTemplate)(variables);


  _writeFile(`${variables.component}.component.ts`, componentTemplate);
  _writeFile(`${variables.component}.controller.ts`, controllerTemplate);
  _writeFile(`${variables.component}.html`, htmlTemplate);
});

function _getTemplate(name: string): any {
  return fs.
    readFileSync(`${__dirname}/blueprints/${name}`, 'utf8');
}

function _writeFile(name: string, template: string): void {
  fs.writeFileSync(`${process.cwd()}/${name}`, template);

}