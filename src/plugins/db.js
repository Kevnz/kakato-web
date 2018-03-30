const Db = require('../services/db');

const register = async (server, options) => {
  console.log('register the db');
  await Db.db.connect();
  server.decorate('request', 'db', Db.db);
  server.decorate('request', 'ObjectId', Db.ObjectId);
};

const name = 'db-plugin';
const version = '1.0.0';
const multiple = false;
const dependencies = '';
const once = true;
const pkg = {};

exports.plugin = { register, name, version, multiple, once, pkg };
