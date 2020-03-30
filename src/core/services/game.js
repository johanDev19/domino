const _ = require('underscore');
const Store = require('./../../../store/Store');
const utils = require('./../../../utils/global');

class Game extends Store {
  startGame() {
    const { players } = this.loadLocalDataBase();

    const playerWithDobleSix = utils.findPlayerWithDobleSix(players);

    return this.makePlay(playerWithDobleSix, { left: 6, right: 6 });
  }

  whoIsTheNextPlayer() {
    const { players } = this.loadLocalDataBase();
    return players.filter(player => player.lastPlayer);
  }

  makePlay(player, dominoToPlay, side) {
    const { table } = this.loadLocalDataBase();
    let tableMutate = table;
    let playerMutate = player;

    const availableDominosToPlay = utils.findAvailableDominosToPlay(
      player,
      table
    );

    const playerHasThisDomino = utils.playerHasThisDomino(dominoToPlay, [
      ...availableDominosToPlay.left,
      ...availableDominosToPlay.right
    ]);

    if (!playerHasThisDomino) {
      return 'No posee esta ficha';
    }
    // CREATE A FUNCTION TO ORDER THE DOMINOS ACCORDING THE LAST DOMINO PLAYED
    // -> FUNCTION HERE
    const dominoOrdered = utils.orderDominoAccordingTheTable(
      playerHasThisDomino,
      table,
      side
    );

    if (side === 'left') {
      tableMutate = {
        ...tableMutate,
        games: [dominoOrdered, ...tableMutate.games],
        lastPlayerId: player.playerId
      };
      playerMutate = {
        ...playerMutate,
        dominos: utils.extractDomino(playerMutate, dominoToPlay),
        lastPlayer: true
      };

      this.updatePlayer(playerMutate);
      this.setData('table', tableMutate);

      return tableMutate;
    }

    if (side === 'right') {
      tableMutate = {
        ...tableMutate,
        games: [...tableMutate.games, dominoOrdered],
        lastPlayerId: player.playerId
      };
      playerMutate = {
        ...playerMutate,
        dominos: utils.extractDomino(playerMutate, dominoToPlay),
        lastPlayer: true
      };

      this.updatePlayer(playerMutate);
      this.setData('table', tableMutate);

      return tableMutate;
    }

    return false;
  }
}

module.exports = Game;
