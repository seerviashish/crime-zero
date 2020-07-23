module.exports = {
  apps: [
    {
      name: 'Crimehero',
      script: './src/app.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      pid_file: './.pm2/pid/crimehero.pid',
      error_file: './.pm2/logs/crimehero_error.log',
      log_file: './.pm2/logs/crimehero_combined.log',
      autorestart: true,
      watch: false,
      max_memory_restart: '200M'
    }
  ]
};
