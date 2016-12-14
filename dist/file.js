"use strict";
var fs = require("fs");
var PREFIX_REGEXP = /^((?:x|data)[:\-_])/i;
var SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
var FileService = (function () {
    function FileService() {
    }
    FileService.getTemplate = function (name) {
        return fs
            .readFileSync(__dirname + "/blueprints/" + name, 'utf8');
    };
    FileService.writeFile = function (name, template) {
        fs.writeFileSync(process.cwd() + "/" + name, template);
    };
    FileService.directiveNormalize = function (name) {
        return name
            .replace(PREFIX_REGEXP, '')
            .replace(SPECIAL_CHARS_REGEXP, fnCamelCaseReplace);
    };
    return FileService;
}());
exports.FileService = FileService;
function fnCamelCaseReplace(all, letter) {
    return letter.toUpperCase();
}
//# sourceMappingURL=file.js.map