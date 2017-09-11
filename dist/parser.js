"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var ParserOptions = (function () {
    function ParserOptions() {
    }
    return ParserOptions;
}());
exports.ParserOptions = ParserOptions;
var Parser = (function () {
    function Parser(options) {
        var _this = this;
        this.options = options;
        this.globalOptions = [
            {
                name: 'commands',
                description: 'Shows all available commands, their aliases and what they do.',
                aliases: ['cmds', 'help', 'h'],
                run: function () {
                    console.log('Available commands:');
                    _this.options.forEach(function (option) {
                        console.log(chalk.cyan(option.name) + "   -->   " + option.description);
                    });
                }
            }
        ];
        this.options = this.options.concat(this.globalOptions);
    }
    Parser.prototype.parse = function (input) {
        if (input.length === 0) {
            console.log(chalk.yellow("Additional argument needed."));
            return;
        }
        var command = this.options
            .find(function (command) { return command.name === input[0] || command.aliases
            .find(function (alias) { return alias === input[0]; }); });
        if (command === undefined) {
            console.log(chalk.yellow(chalk.cyan(input[0]) + " is not an available command."));
        }
        else {
            command.run();
        }
    };
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map