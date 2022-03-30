# Rock Paper Scissors

#### Backend. Made with [Express](https://expressjs.com/).

It has 2 endpoints:

- `/api/v1/:player/:hand`

    Player vs HAL9000 (the computer).

    Params:

    `:player` is the player name

    `:hand` is the hand the player is playing.

- `/api/v1/:player1/:hand1/:player2/:hand2`

    Player vs Player.

    Params:

    `:player1` is the first player name

    `:hand1` is the hand the first player is playing.

    `:player2` is the second player name

    `:hand2` is the hand the second player is playing.

Both endpoints will return an object with the name of the winner and an array of saved scores:

```json
{
    winner: string,

    scores: [
        {
            name: string,
            score: number
        }
    ]
}
```

#### Frontend. Made with [React](https://reactjs.org/).

__It's not complete!__

In its current state the player can press the buttons to advance between the game scenes but it doesn't handle any input and doesn't communicate with the backend.

## How to run

Both backend and frontend can be started from the respectitive folders with the following commands:

`npm install`

followed by

`npm start`

The frontend will be listening at port 3000, while the backend will be listening at port 3001.

## TODO

- Complete the frontend
- Implement tests
- Unify the backend's singleplayer and multiplayer modules.
- Make use of an external UI library such as [MUI](https://mui.com/).