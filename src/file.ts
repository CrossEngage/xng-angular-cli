import fs = require('fs-extra');

export function readFile(fileName: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err: any, data: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function writeFile(fileName: string, content: string, options?: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, options, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function appendToFile(filePath: string, text:string, options?: any) {
  return readFile(filePath)
    .then((content: string) => writeFile(filePath, content.concat(text), options));
}

export function replaceInFile(filePath: string, match: string | RegExp, replacement: string) {
  return readFile(filePath)
    .then((content: string) => writeFile(filePath, content.replace(match, replacement)));
}

export function prependToFile(filePath: string, text: string, options?: any) {
  return readFile(filePath)
    .then((content: string) => writeFile(filePath, text.concat(content), options));
}

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
