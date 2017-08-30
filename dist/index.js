"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var argv = process.argv.slice(2);
var parse_command_1 = require("./utils/parse-command");
/* available commands */
var generate_command_1 = require("./commands/generate.command");
var commandConfigs = [
    {
        name: 'generate',
        description: 'Generates files based on a template.',
        aliases: ['g'],
        run: function () {
            generate_command_1.generate(argv.slice(1));
        }
    }
];
parse_command_1.parseCommand(argv, commandConfigs);
//# sourceMappingURL=index.js.map