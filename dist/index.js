"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var argv = process.argv.slice(2);
var parser_1 = require("./parser");
/* available commands */
var generate_command_1 = require("./commands/generate.command");
var parserConfig = [
    {
        name: 'generate',
        description: 'Generates files based on templates.',
        aliases: ['g'],
        run: function () {
            generate_command_1.generate(argv.slice(1));
        }
    }
];
new parser_1.Parser(parserConfig).parse(argv);
//# sourceMappingURL=index.js.map