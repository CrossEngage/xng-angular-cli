let argv = process.argv.slice(2);
import { parseCommand } from './utils/parse-command';

/* available commands */
import { generate } from './commands/generate.command';

const commandConfigs: any = [
  {
    name: 'generate',
    description: 'Generates files based on a template.',
    aliases: ['g'],
    run: () => {
      generate(argv.slice(1));
    }
  }
];

parseCommand(argv, commandConfigs);
