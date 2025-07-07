import { select } from '@inquirer/prompts';
import fs from 'node:fs/promises';
import { sentenceCase } from 'change-case';
import path from 'node:path';

try{
  const templates = await fs.readdir('./templates');

  const answer = await select({
    message: 'Select an addon template',
    choices: templates.map((template) => {
      return {
        name: sentenceCase(template),
        value: template
      }
    })
  });

  await fs.mkdir('./result', {recursive: true})
  await fs.cp(path.join('./templates', answer), './result', {
    recursive: true
  });
}catch(err){
  if(err.name === 'ExitPromptError'){
    console.log('No template chosen, exiting.');
  }else{
    throw err;
  }
}