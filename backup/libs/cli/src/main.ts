#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';
import { removeCommand } from './commands/remove.js';
import { updateCommand } from './commands/update.js';
import { getPackageConfig } from './utils/config.js';

const program = new Command();
const { name, description, version } = getPackageConfig(import.meta.url);

program
  .name(name)
  .description(description)
  .version(version);

program.addCommand(initCommand().name('init'));
program.addCommand(addCommand().name('add'));
program.addCommand(listCommand().name('list'));
program.addCommand(removeCommand().name('remove'));
program.addCommand(updateCommand().name('update'));

program.parse();
