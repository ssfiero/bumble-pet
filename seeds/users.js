const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

const names = [
  'Sophia',
  'Jackson',
  'Olivia',
  'Liam',
  'Emma',
  'Noah',
  'Ava',
  'Billy',
  'Isabella'
]

exports.seed = function(knex, Promise) {
  const users = names.map(function(name) {
    return {
      username: name,
      password: bcrypt.hashSync(name, salt)
    }
  })

  return knex('users').del()
  .then(function () {
    return knex('users').insert(users);
  });
};
