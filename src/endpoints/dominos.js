const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { domino } = services;

  router.get('/', (req, res) => {
    res.send(domino.store.dominos);
  });

  router.get('/shuffled', (req, res) => {
    res.send(domino.store.shuffledDominos);
  });

  router.get('/shuffle-dominos', (req, res) => {
    res.send(domino.shuffleDominos());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
