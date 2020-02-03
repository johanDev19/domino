const express = require('express');
const app = express();

const Game = require('./game');

const game = new Game();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/dominos', (req, res) => {
  res.send(game.dominos)
})

app.get('/dominos/shuffled', (req, res) => {
  res.send(game.shuffledDominos)
})

app.get('/player', (req, res) => {
  console.log(Game.players)
  res.send(game.players)
})

app.get('/table', (req, res) => {
  res.send(game.table)
})

app.post('/table/game', (req, res) => {
  game.addDominoToTable(game.findPlayerWithDobleSix(), game.findPlayerWithDobleSix().dominos);
  res.send('donde')
})

function bootstrap() {
  

  app.listen(3000, () => console.log('server are running'))
}

bootstrap()