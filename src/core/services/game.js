const Store = require('./../../../store/Store');
const utils = require('./../../../utils/global');

class Game extends Store {
  constructor() {
    super();
  }

  startGame() {
    const { players } = this.loadLocalDataBase();

    const playerWithDobleSix = utils.findPlayerWithDobleSix(players);

    return this.makePlay(playerWithDobleSix, { left: 6, right: 6 });
  }

  whoIsTheNextPlayer() {
    const { players } = this.loadLocalDataBase();
    return players.filter(player => player.lastPlayer);
  }

  makePlay(player, dominoToPlay) {
    const { table } = this.loadLocalDataBase();
    let tableMutate = table;
    let playerMutate = player;

    const availableDominosToPlay = utils.findAvailableDominosToPlay(
      player,
      table
    );

    if (!utils.canPlayThisDomino(dominoToPlay, availableDominosToPlay)) {
      return 'jugada no permitida';
    }

    tableMutate = {
      ...tableMutate,
      games: [...tableMutate.games, dominoToPlay],
      lastPlayerId: player.playerId
    };

    playerMutate = {
      ...playerMutate,
      dominos: utils.extractDomino(playerMutate, dominoToPlay)
    };

    this.updatePlayer(playerMutate);
    this.setData('table', tableMutate);

    return true;
  }
}

module.exports = Game;
