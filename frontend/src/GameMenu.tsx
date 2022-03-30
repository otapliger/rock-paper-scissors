import React from 'react'

// 1. ask how many players
// 2. show inputs where to type the players names
// 3. send the information to the next scene

interface State {
    numberOfPlayers:number
}

interface Props {
    parentCallback:Function
}

class GameMenu extends React.Component<Props, State> {
    state = {
        numberOfPlayers: 1
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            numberOfPlayers: parseInt(event.target.value)
        })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.parentCallback([])
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="radio"
                            name="numberOfPlayers"
                            onChange={this.handleChange}
                            value="1" defaultChecked>
                        </input>
                        <label>Solo</label>
                        <input
                            type="radio"
                            name="numberOfPlayers"
                            onChange={this.handleChange}
                            value="2">
                        </input>
                        <label>Multiplayer</label>
                    </div>
                    <div>
                        <div>
                            <input type="text" name="player1"></input>
                        </div>
                        {this.state.numberOfPlayers === 2 &&
                        <div>
                            <input type="text" name="player2"></input>
                        </div>
                        }
                    </div>
                    <div>
                        <input type="submit" value="Start Game" />
                    </div>
                </form>
            </div>
        )
    }
}

export default GameMenu
