const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { player } = services;

  router.get('/', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(player.players);
  });

  router.get('/player-with-doble-six', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(player.findPlayerWithDobleSix());
  });

  router.get('/number-of-player', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(player.numberOfPlayers.toString());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
