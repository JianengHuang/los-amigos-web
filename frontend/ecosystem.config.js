module.exports = {
  apps: [
    {
      script: 'npm start',
      watch: '.',
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],

  deploy: {
    production: {
      key: 'C:/Users/Leo55/.ssh/AWS/AWSKey-1.pem',
      user: 'ubuntu',
      host: '13.36.39.37',
      ref: 'origin/master',
      repo: 'git@github.com:JianengHuang/los-amigos-frontend.git',
      path: '/home/ubuntu/los-amigos-web/frontend',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
