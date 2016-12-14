declare var inquirer: any;
declare var _: any;
declare var fs: any;
declare var PREFIX_REGEXP: RegExp;
declare var SPECIAL_CHARS_REGEXP: RegExp;
declare function _getTemplate(name: string): any;
declare function _writeFile(name: string, template: string): void;
declare function directiveNormalize(name: string): string;
declare function fnCamelCaseReplace(all: string, letter: string): string;
