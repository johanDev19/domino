const Game = require('./../services/game');

module.exports = class Bot extends Game {
  constructor({ depends }) {
    super();
    this.services = depends;
  }

  initGame() {
    const { gameService, dominoService, playerService } = this.services;
    // run all service to start the game
    dominoService.generateDominos();
    dominoService.shuffleDominos();
    playerService.distributeDominos();

    return gameService.startGame();
  }

  
};
