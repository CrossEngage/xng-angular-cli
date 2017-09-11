"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("./../component");
function component(argv) {
    if (argv.length === 0) {
        console.log('component generator requires a name.');
        return;
    }
    var variables = component_1.ComponentService.getVariables({ name: argv[0] });
    var templates = component_1.ComponentService.getTemplates(variables);
    component_1.ComponentService.writeFiles(variables, templates);
    console.log('Component generated.');
    console.log('----------------------');
    console.log('Still TODO:');
    console.log(' * Add component to implementing module.');
}
exports.component = component;
//# sourceMappingURL=component.command.js.map