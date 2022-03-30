import express from 'express'
import { Player } from './interfaces'
import { hands, getWinner, saveScore } from './app'

export default (req:express.Request, res:express.Response):Player => {

    // check if the hand is valid
    if (!hands.includes(req.params.hand)) {
        res.status(400).send('Bad Request')
        throw new Error()
    }

    const player1 = {
        name: req.params.player,
        hand: req.params.hand
    }

    // simulate the second player
    const player2 = {
        name: 'HAL9000',
        hand: hands[Math.floor(Math.random() * 3)]
    }

    const winner = getWinner(player1, player2)
    saveScore(winner)
    return winner
}