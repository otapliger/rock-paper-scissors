import express from 'express'
import { Player } from './interfaces'
import { hands, getWinner, saveScore } from './app'

export default (req:express.Request, res:express.Response):Player => {

    // check if the hands are valid
    if (!hands.includes(req.params.hand1)
        || !hands.includes(req.params.hand2)) {
        res.status(400).send('Bad Request')
        throw new Error()
    }

    const player1 = {
        name: req.params.player1,
        hand: req.params.hand1
    }

    const player2 = {
        name: req.params.player2,
        hand: req.params.hand2
    }

    const winner = getWinner(player1, player2)
    saveScore(winner)
    return winner
}