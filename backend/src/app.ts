import express from 'express'
import { Player, PlayerScore } from './interfaces'
import singleplayer from './singleplayer'
import multiplayer from './multiplayer'

const app = express()
const port = 3001

app.set('scores', Array<PlayerScore>())

// player vs computer route
app.get('/api/v1/:player/:hand', (req, res) => {
    const winner = singleplayer(req, res)
    res.send({winner: winner.name, scores: app.get('scores')})
})

// player vs player route
app.get('/api/v1/:player1/:hand1/:player2/:hand2', (req, res) => {
    const winner = multiplayer(req, res)
    res.send({winner: winner.name, scores: app.get('scores')})
})

app.listen(port, () => {
    console.log(`Rock-Paper-Scissors listening on port ${port}`)
})

export const hands = ['rock', 'paper', 'scissors']

// given 2 players, return who is the winner
export function getWinner(player1:Player, player2:Player):Player {
    let winner:Player

    switch (player1.hand) {
        case 'rock':
            winner = (player2.hand === 'paper') ? player2 : player1
            break;

        case 'paper':
            winner = (player2.hand === 'scissors') ? player2 : player1
            break;

        case 'scissors':
            winner = (player2.hand === 'rock') ? player2 : player1
            break;

        default:
            throw new Error()
    }

    return winner
}

// increments the score for the given player
export function saveScore(player:Player) {
    const scores:PlayerScore[] = app.get('scores')
    const playerScore = Object.values(scores).find(score => score.name === player.name)

    if (playerScore)
        playerScore.score = playerScore.score + 1
    else
        scores.push({name: player.name, score: 1})
}