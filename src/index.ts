var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');

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
    componentName: `${answers.name}Component`,
    controllerName: `${answers.name.split('')[0].toUpperCase() + answers.name.substring(1)}Controller`,
    controllerPath: `${answers.name}.controller`,
    templatePath: `${answers.name}.html`
  };

  let componentTemplate = _getTemplate('component');
  let controllerTemplate = _getTemplate('controller');
  let htmlTemplate = _getTemplate('template');

  componentTemplate = _.template(componentTemplate)(variables);
  controllerTemplate = _.template(controllerTemplate)(variables);
  htmlTemplate = _.template(htmlTemplate)(variables);

  _writeFile(`${variables.component}.controller.ts`, componentTemplate);
  _writeFile(`${variables.component}.controller.ts`, controllerTemplate);
  _writeFile(`${variables.component}.html`, htmlTemplate);
});

function _getTemplate(name: string): any {
  return fs.
    readFileSync(`${__dirname}/blueprints/${name}.ts`, 'utf8');
}

function _writeFile(name: string, template: string): void {
  fs.writeFileSync(`${process.cwd()}/${name}`, template);

}