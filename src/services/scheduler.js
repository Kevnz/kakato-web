const Agenda = require('agenda');
const Db = require('./db');
const agenda = new Agenda({ db: { address: process.env.DB_URL } });

const tweeter = async (userid, linkid) => {};
const defaultHandler = (job, done) => {
  console.log('defaultHandler');
  done();
};

module.exports = {
  cancel: (name) =>
    new Promise((resolve, reject) => {
      agenda.cancel({ name }, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    }),
  schedule: (
    time = '5 minutes',
    jobName = 'Default Post',
    handler = defaultHandler
  ) => {
    agenda.define(jobName, { lockLifetime: 10000 }, handler);
    setTimeout(() => {
      agenda.schedule(time, jobName);
    }, 4000);
  },
  recurring: (
    time = 'every 5 minutes',
    jobName = 'Default Job',
    handler = defaultHandler
  ) => {
    agenda.define(jobName, handler);
    agenda.every(time, jobName);
  },
  jobs: agenda,
  start: () => {
    agenda.on('ready', async () => {
      console.log('Job Queue Ready');
      // assume restart, jobs have to be defined.
      const tasksToLoad = await Db.schedules.find({});
      tasksToLoad.forEach((t) => {
        agenda.define(`${t.name} - ${t._id.toString()}`);
      });
      agenda.start();
    });
  }
};
