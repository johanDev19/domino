const Player = require('./player');

class Game extends Player {
  constructor() {
    super();

    this.distributeDominos();
  }
  
}

module.exports = Game;