"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('underscore');
var file_1 = require("./file");
var ComponentService = (function () {
    function ComponentService() {
    }
    ComponentService.getVariables = function (name) {
        return {
            modulePrefix: 'xng',
            moduleName: "" + file_1.FileService.directiveNormalize(name),
            componentPrefix: 'xe',
            component: name,
            componentName: file_1.FileService.directiveNormalize(name) + "Component",
            capitalizedComponentName: "" + (file_1.FileService.directiveNormalize(name).split('')[0].toUpperCase() + file_1.FileService.directiveNormalize(name).substring(1)),
            controllerName: file_1.FileService.directiveNormalize(name).split('')[0].toUpperCase() + file_1.FileService.directiveNormalize(name).substring(1) + "Controller",
            componentPath: name + ".component",
            controllerPath: name + ".controller",
            templatePath: name + ".html"
        };
    };
    ComponentService.getTemplates = function (variables) {
        return {
            index: _.template(file_1.FileService.getTemplate('index.ts'))(variables),
            component: _.template(file_1.FileService.getTemplate('component.ts'))(variables),
            componentSpec: _.template(file_1.FileService.getTemplate('component.spec.ts'))(variables),
            controller: _.template(file_1.FileService.getTemplate('controller.ts'))(variables),
            html: _.template(file_1.FileService.getTemplate('template.html'))(variables)
        };
    };
    ComponentService.writeFiles = function (name, variables, templates) {
        file_1.FileService.createFolder(name);
        file_1.FileService.writeFile(name + "/index.ts", templates.index);
        file_1.FileService.writeFile(name + "/" + variables.component + ".component.ts", templates.component);
        file_1.FileService.writeFile(name + "/" + variables.component + ".component.spec.ts", templates.componentSpec);
        file_1.FileService.writeFile(name + "/" + variables.component + ".controller.ts", templates.controller);
        file_1.FileService.writeFile(name + "/" + variables.component + ".html", templates.html);
    };
    return ComponentService;
}());
exports.ComponentService = ComponentService;
//# sourceMappingURL=component.js.map