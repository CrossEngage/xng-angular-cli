"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('underscore');
var changeCase = require('change-case');
var file_1 = require("./file");
var ComponentService = (function () {
    function ComponentService() {
    }
    ComponentService.getVariables = function (args) {
        return {
            name: args.name,
            capitalizeFn: function (arg) { return changeCase.upperCaseFirst(arg); },
            camelCaseFn: function (arg) { return arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); },
            upperCamelCaseFn: function (arg) { return changeCase.upperCaseFirst(arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })); }
        };
    };
    ComponentService.getTemplates = function (variables) {
        return {
            component: _.template(file_1.FileService.getTemplate('component/component.ts'))(variables),
            spec: _.template(file_1.FileService.getTemplate('component/component.spec.ts'))(variables),
            template: _.template(file_1.FileService.getTemplate('component/component.html'))(variables),
        };
    };
    ComponentService.writeFiles = function (variables, templates) {
        var name = variables.name;
        file_1.FileService.createFolder("" + name);
        file_1.FileService.writeFile(name + "/" + name + ".component.ts", templates.component);
        file_1.FileService.writeFile(name + "/" + name + ".component.spec.ts", templates.spec);
        file_1.FileService.writeFile(name + "/" + name + ".html", templates.template);
    };
    return ComponentService;
}());
exports.ComponentService = ComponentService;
//# sourceMappingURL=component.js.map