import fs from 'fs/promises';
import path from 'path';
import ghpages from 'gh-pages';

console.log('\x1b[36m%s\x1b[0m', '\nCopy config files:');
const publishDir = 'out';
const configDir = 'gh-pages-config';
const configs = await fs.readdir(configDir);
console.table(configs);
await Promise.all(configs.map(c => fs.copyFile(path.resolve(configDir, c), path.resolve(publishDir, c))));

console.log('\x1b[36m%s\x1b[0m', '\nPublish to gh-pages...');
ghpages.publish(publishDir, {
  branch: 'gh-pages',
  dest: '.',
  dotfiles: true,
  message: 'Publish to gh-pages',
}, () => {
  console.log('\x1b[36m%s\x1b[0m', '\nPublish compltete.');
});
