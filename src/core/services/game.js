const Store = require('./../../../store/Store');
const utils = require('./../../../utils/global');

class Game extends Store {
  constructor() {
    super();
    this.table = {
      games: [], //
      status: 'inactive',
      lastPlayerId: 0,
      points: 0
    };

    this.setData('table', this.table);
  }

  startGame() {
    const { players } = this.loadLocalDataBase();

    const playerWithDobleSix = utils.findPlayerWithDobleSix(players);
    const domino = utils.extractDomino(playerWithDobleSix.dominos, [6, 6]);

    return this.makePlay(playerWithDobleSix);
  }

  whoIsTheNextPlayer() {
    const { players } = this.loadLocalDataBase();
    return players.filter(player => player.lastPlayer);
  }

  makePlay(player, dominoToPlay) {
    const nextPlayer = this.whoIsTheNextPlayer();
    const availableDominosToPlay = this.findAvailableDominosToPlay(nextPlayer);
    let tableMutate = this.table;

    if (!availableDominosToPlay.includes(dominoToPlay)) {
      return 'jugada no permitida';
    }

    tableMutate = {
      ...tableMutate,
      games: [...tableMutate.games, dominoToPlay],
      lastPlayerId: player.playerId
    };

    this.table = tableMutate;

    return true;
  }

  findAvailableDominosToPlay(user) {
    console.log(user);
  }
}

module.exports = Game;
