import React from 'react'

// 1. receive data from main menu
// 2a. show player 1 name and ask to choose his hand
// 2b. if 2 players repeat step 2a for player 2
// 3. send data to the next scene

interface Props {
    parentCallback:Function
}

class GameTurn extends React.Component<Props> {
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.parentCallback([])
        event.preventDefault()
    }

    render() {
        return (
          <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Player 1
                    </div>
                    <div>
                        <input type="submit" value="ROCK" />
                        <input type="submit" value="PAPER" />
                        <input type="submit" value="SCISSORS" />
                    </div>
                </form>
          </div>
        )
    }
}

export default GameTurn
