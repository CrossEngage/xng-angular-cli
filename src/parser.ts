const chalk = require('chalk');

export class ParserOptions {
  name: string;
  description?: string;
  aliases?: string[];
  run: Function;
}

export class Parser {

  private globalOptions = [
    {
      name: 'commands',
      description: 'Shows all available commands, their aliases and what they do.',
      aliases: ['cmds', 'help', 'h'],
      run: () => {
        console.log('Available commands:');
        this.options.forEach(option => {
          console.log(`${chalk.cyan(option.name)}   -->   ${option.description}`);
        });
      }
    }
  ];

  constructor(private options: ParserOptions[]) {
    this.options = this.options.concat(this.globalOptions);
  }

  public parse(input: string[]): void {
    if (input.length === 0) {
      console.log(chalk.yellow(`Additional argument needed.`));
      return;
    }

    const command = this.options
      .find((command: any) => command.name === input[0] || command.aliases
        .find((alias: string) => alias === input[0]));
    if (!command) {
      console.log(chalk.yellow(`${chalk.cyan(input[0])} is not an available command.`));
    } else {
      command.run();
    }
  }
}
