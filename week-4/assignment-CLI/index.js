//working fine
const { Command } = require('commander');
const program = new Command();
const path = require('path');

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('Count the words in a file path')
  .argument('<filepath>', 'file path to count the words')
  .option('-s, --separator <char>', 'separator character', path.sep)
  .action((filepath, options) => {
    // const correctSeparator = options.separator

    console.log('Filepath received:', filepath);
    
    const words = filepath.split("/");
    console.log(`Number of words: ${words.length}`);
  });

program.parse();
