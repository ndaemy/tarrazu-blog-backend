module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'tarrazu_blog_database'),
        username: env('DATABASE_USERNAME', 'tarrazu'),
        password: env('DATABASE_PASSWORD', '1111'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
})
