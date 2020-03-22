const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { player } = services;

  router.get('/', (req, res) => {
    res.send(player.loadLocalDataBase().players);
  });

  router.get('/player-with-doble-six', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(player.findPlayerWithDobleSix());
  });

  router.post('/distribute-dominos', (req, res) => {
    res.send(player.distributeDominos());
  });

  router.get('/next', (req, res) => {
    res.send(player.findTheNextPlayer());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
