const Express = require('express');

const CreateGameService = require('./core/services/game');
const CreateTableService = require('./core/services/game');
const CreatePlayerService = require('./core/services/game');
const CreateDominoService = require('./core/services/game');

const createGameApi = require('./endpoints/game');
const createTableApi = require('./endpoints/table');
const createPlayerApi = require('./endpoints/player');
const createDominoApi = require('./endpoints/game');

const fielHandle = require('./../tools/fileHandle');

const gameService = new CreateGameService();
const tableService = new CreateTableService();
const playerService = new CreatePlayerService();
const dominoService = new CreateDominoService();

const gameApi = createGameApi({
  services: {
    game: gameService
  },
  mountPoint: '/game'
});

const tableApi = createTableApi({
  services: {
    table: tableService
  },
  mountPoint: '/table'
});

const playerApi = createPlayerApi({
  services: {
    player: playerService
  },
  mountPoint: '/player'
});

const dominoApi = createDominoApi({
  services: {
    domino: dominoService
  },
  mountPoint: '/domino'
});

module.exports = () =>
  new Express()
    .use(Express.json()) // for parsing application/json
    .use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .use(gameApi)
    .use(tableApi)
    .use(playerApi)
    .use(dominoApi);
