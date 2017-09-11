"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('underscore');
var changeCase = require('change-case');
var file_1 = require("./file");
var IntegrationService = (function () {
    function IntegrationService() {
    }
    IntegrationService.getVariables = function (args) {
        return {
            provider: args.provider,
            channelType: args.channelType,
            generateSetup: args.components.some(function (element) { return element === 'setup'; }),
            generateMessageEdit: args.components.some(function (element) { return element === 'message-edit'; }),
            generateMessageView: args.components.some(function (element) { return element === 'message-view'; }),
            generateService: args.components.some(function (element) { return element === 'service'; }),
            generateOther: args.components.some(function (element) { return element === 'other'; }),
            capitalizeFn: function (arg) { return changeCase.upperCaseFirst(arg); },
            camelCaseFn: function (arg) { return arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); },
            upperCamelCaseFn: function (arg) { return changeCase.upperCaseFirst(arg.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })); }
        };
    };
    IntegrationService.getTemplates = function (variables) {
        return {
            setupComponent: _.template(file_1.FileService.getTemplate('integrations/setup.component.ts'))(variables),
            setupSpec: _.template(file_1.FileService.getTemplate('integrations/setup.component.spec.ts'))(variables),
            setupTemplate: _.template(file_1.FileService.getTemplate('integrations/setup.html'))(variables),
            messageEditComponent: _.template(file_1.FileService.getTemplate('integrations/message-edit.component.ts'))(variables),
            messageEditSpec: _.template(file_1.FileService.getTemplate('integrations/message-edit.component.spec.ts'))(variables),
            messageEditTemplate: _.template(file_1.FileService.getTemplate('integrations/message-edit.html'))(variables),
            messageViewComponent: _.template(file_1.FileService.getTemplate('integrations/message-view.component.ts'))(variables),
            messageViewTemplate: _.template(file_1.FileService.getTemplate('integrations/message-view.html'))(variables),
            service: _.template(file_1.FileService.getTemplate('integrations/service.ts'))(variables),
            serviceSpec: _.template(file_1.FileService.getTemplate('integrations/service.spec.ts'))(variables),
            models: _.template(file_1.FileService.getTemplate('integrations/models.ts'))(variables),
            module: _.template(file_1.FileService.getTemplate('integrations/module.ts'))(variables),
            index: _.template(file_1.FileService.getTemplate('integrations/index.ts'))(variables),
        };
    };
    IntegrationService.writeFiles = function (variables, templates) {
        var fileName = variables.provider + "--" + variables.channelType;
        var folderName = "+" + fileName;
        file_1.FileService.createFolder(folderName);
        if (variables.generateSetup) {
            file_1.FileService.writeFile(folderName + "/" + fileName + "-setup.component.ts", templates.setupComponent);
            file_1.FileService.writeFile(folderName + "/" + fileName + "-setup.component.spec.ts", templates.setupSpec);
            file_1.FileService.writeFile(folderName + "/" + fileName + "-setup.html", templates.setupTemplate);
        }
        if (variables.generateMessageEdit) {
            file_1.FileService.writeFile(folderName + "/" + fileName + "-message-edit.component.ts", templates.messageEditComponent);
            file_1.FileService.writeFile(folderName + "/" + fileName + "-message-edit.component.spec.ts", templates.messageEditSpec);
            file_1.FileService.writeFile(folderName + "/" + fileName + "-message-edit.html", templates.messageEditTemplate);
        }
        if (variables.generateMessageView) {
            file_1.FileService.writeFile(folderName + "/" + fileName + "-message-view.component.ts", templates.messageViewComponent);
            file_1.FileService.writeFile(folderName + "/" + fileName + "-message-view.html", templates.messageViewTemplate);
        }
        if (variables.generateService) {
            file_1.FileService.writeFile(folderName + "/" + fileName + ".service.ts", templates.service);
            file_1.FileService.writeFile(folderName + "/" + fileName + ".service.spec.ts", templates.serviceSpec);
        }
        if (variables.generateOther) {
            file_1.FileService.writeFile(folderName + "/" + fileName + ".models.ts", templates.models);
            file_1.FileService.writeFile(folderName + "/" + fileName + ".module.ts", templates.module);
            if (variables.generateSetup || variables.generateMessageView) {
                file_1.FileService.writeFile(folderName + "/index.ts", templates.index);
            }
        }
    };
    return IntegrationService;
}());
exports.IntegrationService = IntegrationService;
//# sourceMappingURL=integration.js.map