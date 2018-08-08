require('xtconf')();

const Scheduler = require('./services/scheduler');

Scheduler.start();

const graceful = (...args) => {
  console.log('Graceful Shutdown', args);
  Scheduler.jobs.stop(() => {
    //process.exit(0);
  });
};

process.on('SIGTERM', graceful);
process.on('SIGINT', graceful);
process.once('SIGUSR2', graceful);
