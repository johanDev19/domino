const Express = require('express');

const CreateStorage = require('./../storage');

const CreateGameService = require('./core/services/game');
const CreateTableService = require('./core/services/table');
const CreatePlayerService = require('./core/services/player');
const CreateDominoService = require('./core/services/domino');
const CreateBotService = require('./core/services/bot');

const createGameApi = require('./endpoints/game');
const createTableApi = require('./endpoints/table');
const createPlayerApi = require('./endpoints/player');
const createDominoApi = require('./endpoints/dominos');
const createStorageApi = require('./endpoints/storage');
const createBotApi = require('./endpoints/bot');

module.exports = async () => {

  const gameService = new CreateGameService();
  const tableService = new CreateTableService();
  const playerService = new CreatePlayerService();
  const dominoService = new CreateDominoService();

  const botService = new CreateBotService({
    depends: {
      gameService,
      tableService,
      playerService,
      dominoService
    }
  });

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

  const storageApi = createStorageApi({
    services: {
      storage: new CreateStorage()
    },
    mountPoint: '/storage'
  });

  const botApi = createBotApi({
    services: {
      bot: botService
    },
    mountPoint: '/bot'
  });

  process.on('SIGINT', () => {
    console.log('closing nodejs process');
    process.exit();
  });

  return new Express()
    .use(Express.json()) // for parsing application/json
    .use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .use(gameApi)
    .use(tableApi)
    .use(playerApi)
    .use(dominoApi)
    .use(storageApi)
    .use(botApi);
};
