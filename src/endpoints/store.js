const Express = require('express');

const router = Express.Router();

module.exports = ({ services, mountPoint }) => {
  const { store } = services;

  router.get('/', (req, res) => {
    console.log('desde el endpoint de player');
    res.send(store.getAllData());
  });

  const app = new Express().use(mountPoint, router);
  return app;
};
