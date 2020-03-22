const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { domino } = services;

  router.get('/', (req, res) => {
    res.send(domino.loadLocalDataBase().dominos);
  });

  router.get('/shuffled', (req, res) => {
    res.send(domino.loadLocalDataBase().shuffledDominos);
  });

  router.post('/shuffle-dominos', (req, res) => {
    res.send(domino.shuffleDominos());
  });

  router.post('/generate', (req, res) => {
    res.send(domino.generateDominos());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
