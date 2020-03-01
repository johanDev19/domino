const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { table } = services;

  router.get('/info', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(table.getTableInfo());
  });

  router.get('/add-game', (req, res) => {
    console.log('desde el endpoint de hola');
    res.send(table.addDominoToTable(table.findPlayerWithDobleSix(), [6, 6]));
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
