#!/usr/bin/env node

import { select } from '@inquirer/prompts';
import fs from 'node:fs/promises';
import { sentenceCase } from 'change-case';
import path from 'node:path';
import { Command } from 'commander';
import pjson from '../package.json' with { type: 'json' };

try{
  const program = new Command();
  program
    .version(pjson.version)
    .arguments('[project-folder]')
    .parse(process.argv);

  const writePath = path.resolve(program.args?.[0] || '.');
  const templates = await fs.readdir(path.join(import.meta.dirname, '../templates'));

  const chosenTemplate = await select({
    message: 'Select an addon template',
    choices: templates.map((template) => {
      return {
        name: sentenceCase(template),
        value: template
      }
    })
  });

  await fs.mkdir(writePath, {recursive: true});
  await fs.cp(path.join(import.meta.dirname, '../templates', chosenTemplate), writePath, {
    recursive: true
  });
}catch(err){
  if(err.name === 'ExitPromptError'){
    console.log('No template chosen, exiting.');
  }else{
    throw err;
  }
}