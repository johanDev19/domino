const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { store } = services;

  router.get('/', (req, res) => {
    res.send(store.getAllData());
  });

  router.post('/reset', (req, res) => {
    res.send(store.resetData());
  });

  router.post('/load', (req, res) => {
    res.send(store.loadLocalDataBase());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
