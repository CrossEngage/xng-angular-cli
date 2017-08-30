import { parseCommand } from './../utils/parse-command';

import { integration } from './integration.command';
import { component } from './component.command';

export function generate(argv: string[]) {
  const generatorConfigs: any = [
    {
      name: 'integration',
      description: 'Generates a new integration.',
      aliases: ['i'],
      run: () => {
        integration(argv.slice(1));
      }
    }, {
      name: 'component',
      description: 'Generates a new component.',
      aliases: ['c'],
      run: () => {
        component(argv.slice(1));
      }
    }
  ];
  
  parseCommand(argv, generatorConfigs);

}
