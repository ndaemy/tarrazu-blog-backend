module.exports = {
  apps: [
    {
      name: 'tarrazu-blog-backend',
      cwd: '/home/ubuntu/tarrazu-blog-backend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
