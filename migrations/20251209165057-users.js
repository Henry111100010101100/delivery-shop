// eslint-disable-next-line @typescript-eslint/no-require-imports
const users = require('./users.json');

module.exports = {
  async up(db) {
    await db.collection('users').insertMany(users);
  },

  // async down(db, client) {}
};
