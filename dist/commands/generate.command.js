"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./../parser");
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
    new parser_1.Parser(generatorConfigs).parse(argv);
}
exports.generate = generate;
//# sourceMappingURL=generate.command.js.map