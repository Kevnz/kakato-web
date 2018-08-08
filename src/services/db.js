const Mongoist = require('mongoist');
const db = Mongoist(process.env.DB_URL);

module.exports = { db, ObjectId: Mongoist.ObjectId };
