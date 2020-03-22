const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { table } = services;

  router.get('/', (req, res) => {
    res.send(table.getTableInfo());
  });

  router.post('/add-game', (req, res) => {
    res.send(table.addDominoToTable(table.findPlayerWithDobleSix(), [6, 6]));
  });

  router.post('/create', (req, res) => {
    res.send(table.loadTable());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
