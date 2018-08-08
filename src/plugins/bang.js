const Chalk = require('chalk');
const log = console.log;

const register = (server, options) => {
  console.log('BANG BANG');
  log(Chalk.blue.bgRed.bold('BANG THE REQUEST YO'));

  server.decorate('request', 'bang', (msg) => {
    log(Chalk.blue.bgRed.bold(msg));
  });
};

const name = 'bang-plugin';
const version = '1.0.0';
const multiple = false;
const dependencies = '';
const once = true;
const pkg = {};

exports.plugin = { register, name, version, multiple, once, pkg };
