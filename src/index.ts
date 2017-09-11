let argv = process.argv.slice(2);
import { Parser } from './parser';

/* available commands */
import { generate } from './commands/generate.command';

const parserConfig = [
  {
    name: 'generate',
    description: 'Generates files based on templates.',
    aliases: ['g'],
    run: () => {
      generate(argv.slice(1));
    }
  }
]

new Parser(parserConfig).parse(argv);
