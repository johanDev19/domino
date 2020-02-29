const Express = require('express');
const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { game } = services;

  router.get('/dominos', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(game.dominos);
  });

  router.get('/dominos/shuffled', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(game.shuffledDominos);
  });

  router.get('/dominos/shuffle-dominos', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(game.shuffleDominos());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
