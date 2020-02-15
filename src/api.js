const Express = require('express');

const createGameService = require('./core/services/game');
const createTableService = require('./core/services/game');

const gameService = new createGameService();
const tableService = new createTableService();

const createGameApi = require('./endpoints/game');
const createTableApi = require('./endpoints/table');

const gameApi = createGameApi({
  services: {
    game: gameService
  },
  mountPoint: '/game'
})

const tableApi = createTableApi({
  services: {
    table: tableService
  },
  mountPoint: '/table'
})

module.exports = () => {

  return new Express()
    .use(Express.json()) // for parsing application/json
    .use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .use(gameApi)
    .use(tableApi)
}
