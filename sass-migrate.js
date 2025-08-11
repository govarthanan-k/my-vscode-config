

const fs = require('fs');
const path = require('path');

const directory = './src/styles'; // change to your SCSS folder

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (file.endsWith('.scss')) {
      results.push(filePath);
    }
  });
  return results;
}

function replaceImports(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Regex to match @import statements (basic)
  // Matches lines like: @import "variables"; or @import 'mixins.scss';
  const importRegex = /@import\s+(['"])([^'"]+)\1\s*;/g;

  let replaced = content.replace(importRegex, (match, quote, importPath) => {
    // Remove .scss extension if present (optional)
    const cleanPath = importPath.replace(/\.scss$/, '');
    return `@use '${cleanPath}' as *;`;
  });

  if (replaced !== content) {
    fs.writeFileSync(file, replaced, 'utf8');
    console.log(`Updated imports in: ${file}`);
  }
}

const scssFiles = walkDir(directory);
scssFiles.forEach(replaceImports);


