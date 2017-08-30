"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_command_1 = require("./../utils/parse-command");
var integration_command_1 = require("./integration.command");
var component_command_1 = require("./component.command");
function generate(argv) {
    var generatorConfigs = [
        {
            name: 'integration',
            description: 'Generates a new integration.',
            aliases: ['i'],
            run: function () {
                integration_command_1.integration(argv.slice(1));
            }
        }, {
            name: 'component',
            description: 'Generates a new component.',
            aliases: ['c'],
            run: function () {
                component_command_1.component(argv.slice(1));
            }
        }
    ];
    parse_command_1.parseCommand(argv, generatorConfigs);
}
exports.generate = generate;
//# sourceMappingURL=generate.command.js.map