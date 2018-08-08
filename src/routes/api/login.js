const { accountLoginSchema } = require('../../schemas/account');

const Bcrypt = require('bcrypt');

module.exports = [
  {
    method: 'POST',
    path: '/api/login',
    config: {
      validate: {
        payload: accountLoginSchema
      },
      handler: async (request, h) => {
        const { password, email } = request.payload;
        const user = await request.db.users.findOne({
          email
        });
        const isValid = await Bcrypt.compare(password, user.password);
        if (!isValid) {
          return {
            failed: true
          };
        }

        return {
          token: user.id
        };
      }
    }
  }
];
