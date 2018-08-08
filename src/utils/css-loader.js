const Fs = require('fs');
const Path = require('path');
console.log('thing');

require.extensions['.css'] = (m, filename) => {
  console.log('filename', filename);
  const content = Fs.readFileSync(filename, 'utf-8');
  //const style = document.createElement('style');
  // style.type = 'text/css';
  // style.innerHTML = content;
  //document.head.appendChild(style);

  return content;
};
