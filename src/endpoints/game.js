const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { game } = services;

  router.post('/make-a-play', (req, res) => {
    const { player, domino } = req.body;

    res.send(game.makePlay(player, domino));
  });

  router.post('/init', (req, res) => {
    game.startGame();
    res.send('init');
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
