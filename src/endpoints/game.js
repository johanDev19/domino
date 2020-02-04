const Express = require('express');
const router = Express.Router();


module.exports = ({services}) => {
  const { game } = services;

  router.get('/hola', (req, res) => {
    console.log('desde el endpoint de hola')
    res.send(game.dominos)
  })

  const app = new Express().use(router);
  return app;
}