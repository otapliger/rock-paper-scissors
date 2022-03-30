import React from 'react'
import GameMenu from './GameMenu'
import GameTurn from './GameTurn'
import GameOver from './GameOver'
import './App.css'

class App extends React.Component {
    state = {
        scene: 0
    }

    handleGameMenu = (playersNames:string[]) => {
        this.setState({
            scene: 1 // Gameplay
        })
    }

    handleGameTurn = (playersHands:string[]) => {
        this.setState({
            scene: 2 // Gameover
        })
    }

    handleGameOver = () => {
        this.setState({
            scene: 0 // Mainmenu
        })
    }

    render() {
        // Return the current scene
        return (
            <div className="App">
                {this.state.scene === 0 &&
                <GameMenu parentCallback={this.handleGameMenu} />
                }
                {this.state.scene === 1 &&
                <GameTurn parentCallback={this.handleGameTurn} />
                }
                {this.state.scene === 2 &&
                <GameOver parentCallback={this.handleGameOver} />
                }
            </div>
        )
    }
}

export default App
