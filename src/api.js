const Express = require('express');

const CreateGameService = require('./core/services/game');
// const createTableService = require('./core/services/game');
// const createPlayerService = require('./core/services/game');
// const createDominoService = require('./core/services/game');

const createGameApi = require('./endpoints/game');
const createTableApi = require('./endpoints/table');
const createPlayerApi = require('./endpoints/player');
const createDominoApi = require('./endpoints/game');

const gameService = new CreateGameService();

const gameApi = createGameApi({
  services: {
    game: gameService,
  },
  mountPoint: '/game',
});

const tableApi = createTableApi({
  services: {
    table: gameService,
  },
  mountPoint: '/table',
});

const playerApi = createPlayerApi({
  services: {
    player: gameService,
  },
  mountPoint: '/player',
});

const dominoApi = createDominoApi({
  services: {
    domino: gameService,
  },
  mountPoint: '/domino',
});

module.exports = () => new Express()
  .use(Express.json()) // for parsing application/json
  .use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  .use(gameApi)
  .use(tableApi)
  .use(playerApi)
  .use(dominoApi);
