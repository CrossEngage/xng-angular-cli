"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
function parseCommand(argv, commands) {
    if (argv.length === 0) {
        console.log(chalk.yellow("Additional argument needed."));
        return;
    }
    var command = commands
        .find(function (command) { return command.name === argv[0] || command.aliases
        .find(function (alias) { return alias === argv[0]; }); });
    if (command === undefined) {
        console.log(chalk.yellow(chalk.cyan(argv[0]) + " is not an available command."));
    }
    else {
        command.run();
    }
}
exports.parseCommand = parseCommand;
//# sourceMappingURL=parse-command.js.map