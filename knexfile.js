module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'bumblepet',
      user:     '',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: "ec2-54-163-234-99.compute-1.amazonaws.com",
      database: 'd3scsnv0s1e0a1',
      user: 'golrigdpsnxwdn',
      password: 'a40c1f16c87a4f949702e2b6800559aa13275fc41fdb4a6e0cb96457b2790e63'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
