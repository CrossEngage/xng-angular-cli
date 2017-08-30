const chalk = require('chalk');

export function parseCommand(argv: string[], commands: any) {
  if (argv.length === 0) {
    console.log(chalk.yellow(`Additional argument needed.`));
    return;
  }
  const command = commands
    .find((command: any) => command.name === argv[0] || command.aliases
      .find((alias: string) => alias === argv[0]));
  if (command === undefined) {
    console.log(chalk.yellow(`${chalk.cyan(argv[0])} is not an available command.`));
  } else {
    command.run();
  }
}