const domino = require('./domino');
const player = require('./player');
const table = require('./table');

const Domino = new domino();
const Player = new player();
const Table = new table();

Player.distributeDominos();
console.log(Player.findPlayerWithDobleSix());

Table.addDominoToTable(Player.findPlayerWithDobleSix(),[6,6])
console.log(Table.table)
