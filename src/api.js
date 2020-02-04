const Express = require('express');

const createGameService = require('./core/services/game');

const gameService = new createGameService();

const createGameApi = require('./endpoints/game');

const gameApi = createGameApi({
  services: {
    game: gameService
  },
  mountPoint: '/game'
})

module.exports = () => {

  return new Express()
    .use(Express.json()) // for parsing application/json
    .use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .use(gameApi)
}
