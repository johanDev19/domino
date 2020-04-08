const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { bot } = services;

  router.post('/', (req, res) => {
    res.send('init the bot');
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
