import React from 'react'

// 1. receive data
// 2. show the winner
// 3. go back to the main menu

interface Props {
    parentCallback:Function
}

class GameOver extends React.Component<Props> {
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.parentCallback([])
        event.preventDefault()
    }

    render() {
        return (
          <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Player 1 Won
                    </div>
                    <div>
                        <input type="submit" value="Main Menu" />
                    </div>
                </form>
          </div>
        )
    }
}

export default GameOver
