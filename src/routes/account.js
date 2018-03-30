const {
  accountLoginSchema,
  accountInputSchema
} = require('../schemas/account');
const GetUser = require('../pre-handlers/get-user');
const Bcrypt = require('bcrypt');
const Uuid = require('uuid/v1');
const Boom = require('boom');

const verifyNewUser = async (request, h) => {
  const user = await request.db.users.findOne({
    email: request.payload.email
  });
  console.log('euser verify', user);
  if (user) {
    return Boom.preconditionFailed('A user with that email already exists');
  }
  return true;
};

module.exports = [
  {
    method: 'GET',
    path: '/account/details',
    config: {
      pre: [{ method: GetUser, assign: 'user' }],
      handler: (request, h) =>
        h.view('account/index', {
          title: 'Account Details Page',
          user: request.pre.user
        })
    }
  },
  {
    method: 'GET',
    path: '/account/new',
    config: {
      handler: (request, h) =>
        h.view('account/new', { title: 'New Account Page' })
    }
  },
  {
    method: 'POST',
    path: '/account/new',
    config: {
      validate: {
        payload: accountInputSchema
      },
      pre: [{ method: verifyNewUser }],
      handler: async (request, h) => {
        const { firstName, lastName, password, email } = request.payload;
        const hashedPassword = await Bcrypt.hash(password, 10);
        const user = {
          id: Uuid(),
          firstName,
          lastName,
          email,
          password: hashedPassword
        };
        const savedUser = await request.db.users.save(user);
        console.log('savedUser', savedUser);
        return h.redirect('/login');
      }
    }
  },
  {
    method: 'GET',
    path: '/login',
    config: {
      handler: (request, h) => h.view('login', { title: 'Home Page' })
    }
  },
  {
    method: 'POST',
    path: '/login',
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
          return h.view('login', {
            title: 'Login Failed',
            message: 'Login Failed'
          });
        }
        const credentials = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email
        };
        let cookie = request.state.session;

        if (!cookie) {
          cookie = user.id;
        }
        const sid = Uuid();
        console.log('cookie', cookie);
        //h.state('info', { id: user.id });
        h.state('session', cookie);
        await request.server.app.cache.set(sid, { credentials }, 0);

        await request.db.sessions.insert({
          userId: user.id,
          sessionId: sid
        });

        request.cookieAuth.set({ sid });
        return h.redirect('/').state('session', sid);
      }
    }
  }
];
