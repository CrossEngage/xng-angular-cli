import fs = require('fs');

var PREFIX_REGEXP = /^((?:x|data)[:\-_])/i;
var SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;

export class FileService {

  static getTemplate(name: string): string {
    return fs
      .readFileSync(`${__dirname}/blueprints/${name}`, 'utf8');
  }

  static writeFile(name: string, template: string): void {
    fs.writeFileSync(`${process.cwd()}/${name}`, template);
  }

  static createFolder(dir: string) {
    console.log(dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(`${process.cwd()}/${dir}`);
    }
  }

  static directiveNormalize(name: string) {
    return name
      .replace(PREFIX_REGEXP, '')
      .replace(SPECIAL_CHARS_REGEXP, fnCamelCaseReplace);
  }
  
}

function fnCamelCaseReplace(all: string, letter: string) {
  return letter.toUpperCase();
}
